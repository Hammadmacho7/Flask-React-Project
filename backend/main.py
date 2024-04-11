from flask import Flask, request
from flask_restx import Api  # type: ignore
from models import Recipe, User
from exts import db
from flask_migrate import Migrate # type: ignore
from flask_jwt_extended import JWTManager # type: ignore
#Flask-jwt for user authentication 
from recipes import recipe_ns
from auth import auth_ns
from flask_cors import CORS

def create_app(config):
    app=Flask(__name__)
    app.config.from_object(config)

    CORS(app)

    db.init_app(app)

    migrate = Migrate(app,db)
    JWTManager(app)

    api=Api(app,doc='/docs') #important stuff 

    api.add_namespace(recipe_ns)
    api.add_namespace(auth_ns)


    @app.shell_context_processor
    def make_shell_context():
        return{
            "db":db,
            "Recipe":Recipe,
            "user":User
        }
 
    return app