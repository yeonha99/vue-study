<template>
    <div>
        <ProviedInjectChild />
    </div>
</template>

<script>
import ProviedInjectChild from "./ProvideInjectChild";
export default {
    components: {ProviedInjectChild},
    data(){
        return {
            items:["A","B"],
        };
    },
    provide(){
        return {
            itemLength: this.items.length,
        };
    },
};
</script>