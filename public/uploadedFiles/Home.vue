<template>
    <div>
        <Header />
        <!-- <Body />
        <Condition />
        <EventStuff /> -->
        <ModelStuff />
        
        <Footer />
        
    </div>
</template>

<script>
import Header from "./Header.vue"
import Body from "./Body.vue"
import Footer from "./Footer.vue"
import Condition from "./Condition.vue"
import EventStuff from "./EventStuff.vue"
import ModelStuff from "./ModelStuff.vue"

export default {
    name:"Home",
    components:{
        Header,
        Body,
        Condition,
        EventStuff,
        ModelStuff,
        Footer
    }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>