---
title: sdfsa
dics: asdfs
wrapperClass: test-wrap
---

### vue preview

```vue demo
<template>
  <div>
    <button>button test</button>
    <button type="primary">primary button</button>
  </div>
</template>
```

### Icon `Button`

description

> demo need vue code wrapped
```vue demo
<template>
  <div>num: {{ num }}</div>
  <div>
    <button type="primary1" icon="el-icon-edit" @click="testclick">add</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0,
    }
  },
  methods: {
    testclick() {
      this.num++
    }
  }
}
</script>
```

### Attributes

## table

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |