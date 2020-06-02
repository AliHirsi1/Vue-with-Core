<template>
<div class="section-image"> 
    <ul class="image-showcase" 
        v-for="photo in photoObject" :key="photo.photoId">
        <li>
             <figure class="figureImage">
                 <img :src="photo.imageLocation" @error="imageLoadError" />            
                <div class="image-caption">
                    <span>{{photo.photoName}}</span>
                </div>
             </figure>
        </li>
    </ul>     
    <!-- <div class="col-6 col-sm-3"       
             v-for="photo in photoObject" :key="photo.photoId">
             <figure>
                 <img :src="photo.imageLocation" @error="imageLoadError"/>            
                <p>{{photo.photoName}}</p>
             </figure>                  
                  
    </div>  -->
</div>
    
</template>
<script>
import upload from './upload';
export default {
    components:{
        upload     
     
    },
    data(){
        return {
            photoObject: []
        }
    },
    created(){       
        let me = this;
        // local server url
        // this was set up to get around issue to not able to access local files
        let localServerUrl = 'http://127.0.0.1:8887/' 

        this.$api.get("photo/Index")
            .then(result => {                
                let data = result.data;
                data.forEach(element => {
                    let imageName = element.imageLocation.split('images\\')[1];;
                    let imageUrl = localServerUrl + imageName;
                    element.imageLocation = imageUrl                
                    me.photoObject.push(element);
                });    
        })

    },
    
    methods:{
        imageLoadError (event) {
            console.log('Image failed to load');
        }

    }

    
}
</script>

<style scoped>
 .image-caption {

     margin-top: -40px;
     text-transform: uppercase;
     margin-left: 10px;
     letter-spacing: 1px;
     font-weight: 100;
     font-size: initial;
     color: #f5f5f5;
     font-family: 'lato', 'Arial', sans-serif;
     transform: scale(1.04);  
    }

.section-image {
    max-width: 90%;
    margin: 0 auto;
}

.image-showcase {
    list-style: none;
    width: 100%
}
.image-showcase li{
    display: block;
    float: left;
    width: 25%
}

.figureImage{
    width: 100%;
    overflow: hidden;   
}

figureImage img {   
    width: 100%;
    height: auto;
    transform: scale(1.15);
    transition: transform 0.5; 
   
}
img:hover{
    transform: scale(1.03);
    width: 100%
     
}



















   




    

    
</style>
