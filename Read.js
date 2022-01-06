AFRAME.registerComponent("tour",{
    init:function(){
        this.placesContainer=this.el
        this.createCards()
    },

    createCards:function(){
        const thumbNailRef=[
        {
            id:"x-men",
            title:"The X-men",
            url:"https://comicvine.gamespot.com/a/uploads/scale_medium/0/77/118903-28557-homage-covers.jpg",
        },
        {
            id:"iron-man",
            title:"Iron Man",
            url:"https://b3h2.scene7.com/is/image/BedBathandBeyond/62548944309879p?wid=460&hei=460", 
        },
        {
            id:"thor",
            title:"Thor",
            url:"https://i2.wp.com/starbaseatlanta.com/wp-content/uploads/mvatb73301.jpg?fit=428%2C600&ssl=1s", 
        },
        {
            id:"taj-mahal",
            title:"Taj Mahal",
            url:"../assets/thumbnails/taj_mahal.png", 
        },
    ];

    let previousXposition=-60;
    for(var item of thumbNailRef){
        const posX=previousXposition+25
        const posY=10
        const posZ=-40
        const position={x:posX,y:posY,z:posZ}
        previousXposition=posX

        const borderEl=this.createBorder(position,item.id)
        const thumbnail=this.createThumbnail(item)
        borderEl.appendChild(thumbnail)

        const titleEl=this.createTitleEl(position,item)
        borderEl.appendChild(titleEl)
        this.placesContainer.appendChild(borderEl)
    }
    },

    createBorder:function(position,id){
        const entityel=document.createElement("a-entity");
        entityel.setAttribute("id",id)
        entityel.setAttribute("visible",true)
        entityel.setAttribute("position",position)
        entityel.setAttribute("geometry",{primitive:"rectangle",width:6,height:11})
        entityel.setAttribute("material",{color:"red",opacity:1})
        return entityel

    },

    createThumbnail:function(item){
        const entityel=document.createElement("a-entity");
        entityel.setAttribute("visible",true)
        entityel.setAttribute("geometry",{primitive:"rectangle",width:5,height:10})
        entityel.setAttribute("material",{src:item.url})
        return entityel
    },

    createTitleEl:function(position,item){
        const entityel=document.createElement("a-entity");
        entityel.setAttribute("visible",true)
        entityel.setAttribute("position",position)
        entityel.setAttribute("text",{font:"exo2bold",align:"center",width:70,color:"black",value:item.title})
        const elposition=position
        elposition.y=-20
        entityel.setAttribute("position",elposition)
        return entityel

    }

})