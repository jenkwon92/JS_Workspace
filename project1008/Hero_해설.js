class Hero{
    constructor(container, src, width, height, x, y, velX, velY){
        this.container=container;//비행기가 부착될 부모 요소
        this.img=document.createElement("img");
        this.src=src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;

        this.img.src=this.src;
        //스타일 적용 
        this.img.style.width=width+"px";
        this.img.style.height=height+"px";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        //화면에 부착
        this.container.appendChild(this.img);
    }    

    tick(){
        this.x=this.x+this.velX; //기존 x위치값에 속도만큼을 더해나간다..
        this.y=this.y+this.velY; //기존 y위치값에 속도만큼을 더해나간다..
    }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
    
}




