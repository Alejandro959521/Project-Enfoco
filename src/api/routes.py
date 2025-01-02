"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Elements
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import base64
import os




api = Blueprint('api', __name__, static_folder='public')


# Allow CORS requests to this API
CORS(api)  


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/elements', methods=['POST'])
def add_element():
    data = request.json 

    
    if not all(k in data for k in ('title', 'price', 'category', 'description', 'image')):
        return jsonify({"error": "Faltan datos en el JSON"}), 400

    title = data['title']
    price = data['price']
    category = data['category']
    description = data['description']
    image_url = data['image']

   
    if Elements.query.filter_by(title=title).first():
        return jsonify({"error": "El título ya existe"}), 409

    
    new_element = Elements(
        title=title,
        price=price,
        category=category,
        description=description,
        image=image_url
    )

    
    try:
        db.session.add(new_element)
        db.session.commit()
    except Exception as error:
        print({"message": "an internal error occurred",
            "error": error.args})
        db.session.rollback()
        return jsonify({
            "message": "an internal error occurred",
            "error": error.args
        }), 500
    

    return jsonify(new_element.to_dict()), 201  

@api.route("/elements", methods=["GET"])
def get_all_pictures():
    
    valor = Elements.query.all()
   
    if valor is None:

         return jsonify("elemenst it's none"), 404
    photos = [element.to_dict() for element in valor]

    return jsonify(photos), 200

@api.route("/elements/category/<string:category_name>", methods=["GET"])
def get_pictures_by_category(category_name):
    
    # Filtrar elementos por categoría
    pictures = Elements.query.filter_by(category=category_name).all()

    if not pictures:
        return jsonify({
            "message": "No pictures found in this category"
        }), 404  

   
    result = [element.to_dict() for element in pictures]

    return jsonify(result), 200 


@api.route("/elements/<int:element_id>", methods=["GET"])
def get_picture(element_id):
    
    existing_picture = Elements.query.get(element_id)

    if not existing_picture:
      return jsonify({ 
        "message": "the picture does not exist"
     }), 400 

   
    return jsonify(existing_picture.to_dict()), 200

@api.route("/elements/delete/<int:element_id>", methods=["DELETE"])
def delete_picture(element_id):
    
    existing_picture = Elements.query.get(element_id)
    print("desde delete back",existing_picture.image)

    if not existing_picture:
      return jsonify({ 
        "message": "the picture does not exist"
     }), 400 
    
    image_path = existing_picture.image
    try:
        db.session.delete(existing_picture)
        db.session.commit()
        
        if os.path.exists(image_path):
            os.remove(image_path)
        else:
            return jsonify({
                "message": "the picture data was deleted but the image file was not found"
            }), 200

    except Exception as error:
      return jsonify({ 
          "message": "the picture cannot be deleted",
          "error": error.args
      }), 400
    
    return jsonify({"message": "removed picture"}), 200



