<template>
    <div>


        <router-view></router-view>
        <v-nav></v-nav>
    </div>
</template>
<script>
import vNav from '../../common/nav'
export default {
    data() {
        return {
            
        }
    },
    components:{
        vNav
    }
}
</script>

<style lang="" scoped>
    
</style>