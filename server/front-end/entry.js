// ooooooooooooooooooooooooooooooooooooo
// ooooooooooooo
// oooo
//
import Vue from "vue"
import blvd from './components/blvd.vue'

// This is the root Vue element of our app. It is one component -- blvd. 
// We do this little dance to get into the Vue Way of componenets and 
// pre-compiled (via webpack) templates as soon as possible.
new Vue({
    name: 'Circle',
    el: 'circle',
    components: { blvd },
    // Use render here instead of a string template so
    // we don't have to include the compiler in our dist.
    render (createElement) {
        return createElement('blvd', {
            props: {
                circleId: this.$el.attributes.id.value,
                member: JSON.parse(this.$el.attributes.member.value)
            }
        })
    }
});