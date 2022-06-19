<template>
    <div>
       Item Length: {{this.itemLength}}
    </div>
</template>

<script>
export default {
    inject: ["itemLength"],
};
</script>