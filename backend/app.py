from flask import Flask, jsonify, request
from flask_cors import CORS

from database import get_db_connection


app = Flask(__name__)
CORS(app)


# =========================================================
# HOME
# =========================================================

@app.route("/")
def home():
    return jsonify({
        "message": "VAJRA backend is running"
    })


# =========================================================
# TEST DATABASE
# =========================================================

@app.route("/api/test-db")
def test_database():

    connection = None
    cursor = None

    try:
        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute("SELECT 1")
        result = cursor.fetchone()

        return jsonify({
            "database": "connected",
            "result": result[0]
        })

    except Exception as error:

        return jsonify({
            "database": "connection failed",
            "error": str(error)
        }), 500

    finally:

        if cursor:
            cursor.close()

        if connection:
            connection.close()


# =========================================================
# CONTACT / CONVERSATION FORM
# =========================================================

@app.route("/api/contact", methods=["POST"])
def submit_contact():

    connection = None
    cursor = None

    try:
        data = request.get_json()

        name = data.get("name")
        email = data.get("email")
        phone = data.get("phone")
        city = data.get("city")
        message = data.get("message")
        organisation = data.get("organisation")
        role = data.get("role")
        protection = data.get("protection")
        interest = data.get("interest")

        connection = get_db_connection()
        cursor = connection.cursor()

        query = """
            INSERT INTO contact_requests
            (
                interest,
                name,
                email,
                phone,
                city,
                message,
                organisation,
                role,
                protection
            )
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """

        values = (
            interest,
            name,
            email,
            phone,
            city,
            message,
            organisation,
            role,
            protection
        )

        cursor.execute(query, values)
        connection.commit()

        return jsonify({
            "success": True,
            "message": "Request submitted successfully"
        }), 201

    except Exception as error:

        if connection:
            connection.rollback()

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500

    finally:

        if cursor:
            cursor.close()

        if connection:
            connection.close()


# =========================================================
# RUN SERVER
# =========================================================

if __name__ == "__main__":
    app.run(debug=True)