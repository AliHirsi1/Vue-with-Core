<template>
<div>
    <header>
        <nav>
            <div class="row">
                <img class="logo" src="#" alt="metrophoto">
                <ul class="main-nav">
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">Log in</a></li>
                     <li><a href="#">Upload</a></li>
                </ul>
            </div>
        </nav>

    </header>

</div>
    
</template>
<script>
export default {
    data(){
        return {
            
        }
    }
    
}
</script>
<style scoped>

.row {
    max-width: 1140px;
    margin: 0 auto;

  }

.logo{
    height: 100px;
    width: auto;
    float: left;
    margin-top: 40px;
}

.main-nav {
    float: right;
    list-style: none;
    margin-top: 40px;
}

.main-nav li {
    display: inline-block;
    margin-left: 40px;
}

.main-nav li a:link,
.main-nav li a:visited {
    text-decoration: none;  
    text-transform: uppercase;
    font-size: 90%;
}



</style>