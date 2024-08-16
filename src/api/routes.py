"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Elements
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import base64
import os

api = Blueprint('api', __name__, static_folder='front')

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
    data = request.json  # Obtenemos los datos JSON de la solicitud

    # Validar que los campos requeridos estén presentes en el JSON
    if not all(k in data for k in ('title', 'price', 'category', 'description', 'image')):
        return jsonify({"error": "Faltan datos en el JSON"}), 400

    title = data['title']
    price = data['price']
    category = data['category']
    description = data['description']
    image_data = data['image']

    # Decodificar la imagen de base64 y guardarla en el servidor

    image_filename = f"{title.replace(' ', '_')}.jpg"
    current_dir = os.path.dirname(os.path.abspath(__file__))
    image_filepath = os.path.join(current_dir, '..', 'front', 'img', image_filename)
    with open(image_filepath, 'wb') as image_file:
        image_file.write(base64.b64decode(image_data))

    # Comprobar si el título ya existe
    if Elements.query.filter_by(title=title).first():
        return jsonify({"error": "El título ya existe"}), 409

    # Crear un nuevo elemento 
    new_element = Elements(
        title=title,
        price=price,
        category=category,
        description=description,
        image=image_filepath
    )

    # Añadir el nuevo elemento a la base de datos
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


@api.route("/elements/delete/<int:element_id>", methods=["DELETE"])
def delete_picture(element_id):
    
    existing_picture = Elements.query.get(element_id)

    if not existing_picture:
      return jsonify({
        "message": "the picture does not exist"
     }), 400

    try:
        db.session.delete(existing_picture)
        db.session.commit()
    except Exception as error:
      return jsonify({
          "message": "the picture cannot be deleted",
          "error": error.args
      }), 400
    
    return jsonify({"message": "removed picture"}), 200