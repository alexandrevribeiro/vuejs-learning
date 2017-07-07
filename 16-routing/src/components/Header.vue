<template>
  <div>
      <ul class="nav nav-pills">
        <!--
        <li role="presentation"><router-link to="/">Home</router-link></li>
        <li role="presentation"><router-link to="/user">User</router-link></li>
        -->

        <!--By default the "active-class" will be added to the "router-link" that
        "starts with" the value of "to". Thus, since every URL starts with "/",
        all router-links would be "active" always.
        To solve this issue we should use the "exact" in the "/" to tells Vue.js to
        exactly match the "to" instead of using "starts with"-->
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/users" tag="li" active-class="active"><a>Users</a></router-link>
    </ul>
  </div>
</template>
