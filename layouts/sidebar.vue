<template>
  <div
    class="sidebar"
    :class="isOpen ? 'opened' : ''"
    @click="onClickHandle"
  >
    <div
      class="overlay"
    ></div>
    <el-row class="tac sidenav">
      <el-col :span="12" class="org-menu"> 
        <el-menu
          class="org-menu"
          background-color="#545c64"
          >
          <router-link to="/dashboard">
            <el-menu-item class="el-menu-item" index="1">
              <span><i class="fa fa-home"></i>Main</span>
            </el-menu-item>
          </router-link>

          <router-link to="/createsquad">
            <el-menu-item class="el-menu-item" index="2">
              <span><i class="fa fa-th-large"></i>Create Squad</span>
            </el-menu-item>
          </router-link>

          <router-link to="/wiki">
            <el-menu-item class="el-menu-item" index="3">
              <span><i class="fa fa-book"></i>Wiki</span>
            </el-menu-item>
          </router-link>

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'

  const AppProp = Vue.extend({
    props: {
      isOpen: Boolean
    }
  })
  export default class Sidebar extends AppProp{
    onClickHandle(){
      this.$emit('header-clicked')
    }
  }
</script>
 <style scoped>
  /* TODO: Animate toggle action */
  a {
    color:white;
  }

  a:hover {
    text-decoration: none;
  }

  .sidebar {
    width: 0;
    height: 100%;
  }
  .opened { 
    width: 100%;
  }

  .opened .overlay {
    background-color: black;
    opacity: 0.7;
    height: 100%;
    width: 100%;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;

  }

  .sidenav {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    overflow-x: hidden;
    height: 100%;
  }

  .opened .sidenav {
    width: 100%;
    max-width: 300px;
    height: 100%;

  }
  .org-menu {
    height: 100%;
    background-color: #545c64;
  }
  .fa {
    margin-right: 6px;
  }

  .el-menu-item span {
    color: white;
  }
  .el-menu-item.is-active span {
    color: orange;
  }
 </style>
 
