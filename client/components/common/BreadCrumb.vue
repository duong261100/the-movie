<template>
  <div class="bg-gray-theme-color p-[22px]">
    <div class="container">
      <ol vocab="http://schema.org/" typeof="BreadcrumbList">
        <li property="itemListElement" typeof="ListItem">
          <NLink property="item" typeof="WebPage" to="/">
            <span property="name">Home</span>
          </NLink>
          <meta property="position" content="1" />
        </li>
        <li
          v-for="(crumb, index) in crumbs"
          :key="index"
          property="itemListElement"
          typeof="ListItem"
        >
          <NLink property="item" typeof="WebPage" :to="crumb.path">
            <span property="name">{{
              $route.fullPath === crumb.path && title !== null
                ? title
                : decodeURI(crumb.title)
            }}</span>
          </NLink>
          <meta property="position" :content="index + 2" />
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
const titleCase = require('ap-style-title-case')

export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },

  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []

      let path = ''
      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)

        if (match.name !== null) {
          crumbs.push({
            title: titleCase(param.replace(/-/g, ' ')),
            ...match,
          })
        }
      })

      return crumbs
    },
  },
}
</script>

<style scoped>
* {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
}

ol {
  list-style: none;
}

li {
  display: inline;
}

li:after {
  content: ' > ';
  display: inline;
  padding: 0 0.0725em 0 0.15em;
}

li:last-child:after {
  content: '';
}

li a {
  color: black;
}

li a.nuxt-link-exact-active.nuxt-link-active {
  color: grey;
}
</style>