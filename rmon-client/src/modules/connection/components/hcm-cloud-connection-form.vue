<template>
    <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Name">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Identifier">
            <el-input v-model="form.identifier"></el-input>
        </el-form-item>
        <el-form-item label="HCM Cloud Base URL">
            <el-input v-model="form.hcmCloudBaseURL"></el-input>
        </el-form-item>
        <el-form-item label="Username">
            <el-input v-model="form.hcmCloudBaseURL"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pass">
            <el-input type="password" v-model="form.hcmCloudBaseURL" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('form')">Submit</el-button>
            <el-button @click="resetForm('form')">Reset</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        identifier: '',
        hcmCloudBaseURL: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>

</style>
