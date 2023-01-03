document.addEventListener('DOMContentLoaded', ()=>{

    class Circle{
        
        get newRadius(){
            return this.radius;
        }
        set newRadius(value){
            return this.radius = this.radius + value;
        }
        get Diametr(){
            return this.diametr = this.radius * 2;
        }
        getСircleSqrt(){
            this.sqrt = 3.14 * (this.radius**2)
            console.log(this.sqrt + " площа")
        }
        getCircleLong(){
            this.long = this.diametr * 3.14;
            console.log(this.long + " довжина")
        }
    }
    
    let circle = new Circle();

    
    console.log(circle)
    
    circle.radius = 3;
    
    console.log(circle.radius + " радіус до зміни");
    console.log(circle.Diametr + " діаметр до зміни")
    circle.getСircleSqrt();
    circle.getCircleLong();
    
    
    circle.newRadius = 4;
    
    console.log(circle)
    
    console.log(circle.radius + " радіус після зміни");
    console.log(circle.Diametr + " діаметр після зміни")
    
    circle.getСircleSqrt();
    circle.getCircleLong();
    
    
    
    class Marker{
        constructor(color){
            this.color = color;
            this.capacity = 100;
        }
        writeText(){
            text.addEventListener('keydown', event => {
                if(event.key != '(blank space)'){
                    this.capacity = this.capacity - 0.5
                }
    
            })
        }
        resetCapacity(event){
            event.addEventListener('click', ()=>{
                this.capacity = 100;
            })
        }
    }

    let marker = new Marker("red");
    
    let textarea = document.createElement("textarea"),
        markerCapacity = document.createElement("span");

    markerCapacity.textContent = marker.capacity

    let text = document.getElementById('text');

    text.append(markerCapacity);
    text.prepend(textarea);

    
})