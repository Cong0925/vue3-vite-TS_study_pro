<template>
  <div>
    <el-container>
      <el-header style="background-color:#1789f5;">
        <div>
          header
        </div>
      </el-header>

      <el-container>
        <el-aside width="200px" class="aside">
          <el-affix>
            <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
              default-active="2" text-color="#fff" @open="handleOpen" @close="handleClose">
              <el-menu-item @click="$router.push('/home')" index="0">
                <span>Home</span>
              </el-menu-item>
              <el-sub-menu index="1">
                <template #title>
                  <span>menu</span>
                </template>
                <el-menu-item @click="$router.push('/menu1')" index="1-1">Websocked study</el-menu-item>
                <el-menu-item @click="$router.push('/menu2')" index="1-2">item two</el-menu-item>
                <el-menu-item @click="$router.push('/menu3')" index="1-3">item three</el-menu-item>
              </el-sub-menu>
              <el-menu-item index="2">
                <span>Navigator Two</span>
              </el-menu-item>
            </el-menu>
          </el-affix>

        </el-aside>
        <el-main>
          <!-- 子路由出口 -->
          <router-view />
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script setup lang="ts">
const handleOpen = () => {
  console.log('open')
}
const handleClose = () => {
  console.log('close')
}
</script>

<style scoped >
.aside {
  height: 90vh;
  background-color: #545c64;
}
</style>