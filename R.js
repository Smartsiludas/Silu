
function Employee(name,age,basicsal) {
    this.name=name
    this.age=age
    this.basicsal=this.basicsal
    this.bonus=5000
    this.actualsal=function()
    {
       var x=basicsal+this.bonus
        console.log("The actual salary is"+x)

    }
    
}
this.display()
{
    console.log("Your name is"+this.name+"Your age is"+this.age)
}
emp1=new Employee("Ashis",21,50000)
emp1.display()
emp1.actualsal()