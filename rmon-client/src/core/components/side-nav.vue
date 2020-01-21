<template>
    <el-menu :collapse="isCollapsed" class="el-menu-vertical">
        <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
            <span slot="title">Home</span>
        </el-menu-item>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-connection"></i>
                <span slot="title">Connection Management</span>
            </template>
            <el-menu-item index="2-1">Item One</el-menu-item>
            <el-menu-item index="2-2">Item Two</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">
                <i class="el-icon-monitor"></i>
                <span slot="title">Monitoring</span>
            </template>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
  name: 'SideNav',
  data () {
    return {
      isCollapsed: false
    }
  }
}
</script>

<style>
.el-menu-vertical:not(.el-menu--collapse) {
    width: 300px;
    min-height: 400px;
  }
.el-menu-vertical {
    text-align: left;
}
</style>
