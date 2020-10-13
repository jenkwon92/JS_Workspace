class Cell{
  constructor(container, width, height, text){
    this.div=document.createElement("div");
    this.container=container;
    this.width=width;
    this.height=height;
    this.text=text;
    
    this.div.innerHTML="<h4>"+this.text+"</h4>";

    this.div.style.width=this.width+"px";
    this.div.style.height=this.height+"px";
    this.div.style.background="tan";
    this.div.style.border="1px solid gold";
    this.div.style.boxSizing="border-box";
    this.div.style.float="left";
    this.div.style.textAlign="center";

    this.container.appendChild(this.div);
  }
}