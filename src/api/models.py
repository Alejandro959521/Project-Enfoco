from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
import os
db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self): 
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
class Elements(db.Model):
    
    __tablename__ = 'elements'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=True, nullable=False)
    price = db.Column(db.String(80), unique=False, nullable=False)
    category = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(500), unique=False, nullable=False)
    image = db.Column(db.Text, nullable=False) 

    def __repr__(self):  
        return f'<Elements {self.title}>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title, 
            'price': self.price,
            'category': self.category,
            'description': self.description,
            'image': f"{os.path.basename(self.image)}"  
    }

    def serialize(self): 
        return {
            "id": self.id,
            "title": self.title,  
            "price": self.price,
            "category": self.category,
            "description": self.description,
            "image": self.description 
            # do not serialize the password, its a security breach
        }    