from fastapi import FastAPI
from pydantic import BaseModel

class Student(BaseModel):
    stuname: str
    studept: str
    stuusername: str
    stupassword: str
    stuage: int
    stumark:float

app = FastAPI()
#localhost:8000/getStudents
@app.get("/getStudents")
def get_students():
    return "Get students method called"
#localhost:8000/addStudent
@app.post("/addStudent")
def add_student(stu: Student):
    return {"student_details": stu}


#try two more routes
#/updateStudent =>put & /deleteStudent => delete
@app.put("/updateStudent")
def update_student():
    return "Update student method called"
@app.delete("/deleteStudent")
def delete_student():   
    return "Delete student method called"
@app.get("/getparicularStudent/:{id}")
def getParticularStudent(id:int):
    return {"userid":id}
#localhost:8000/filterdept?dept="CSE" &mark=65
@app.get("/filterdept")
def filterdept(dept:str,mark:int):
    return {"dept":dept,"mark":mark}