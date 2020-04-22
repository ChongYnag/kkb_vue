<template>
  <div>
    <KForm :model="model" :rules="rules" ref="form">
      <KInputitem label="用户名" prop="username">
        <KInput v-model="model.username"></KInput>
      </KInputitem>
      <KInputitem label="密码" prop="password">
        <KInput v-model="model.password" type="password"></KInput>
      </KInputitem>
      <KInputitem>
        <button @click="login">登陆</button>
      </KInputitem>
    </KForm>
    {{model}}
  </div>
</template>

<script>
import KInput from "./KInput";
import KInputitem from "./KInputitem";
import KForm from "./KForm";
import Notice from "../Notice/index";
import create from "@/utils/create";

export default {
  components: {
    KInputitem,
    KInput,
    KForm
  },
  data() {
    return {
      model: {
        username: "tom",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "用户名必填" }],
        password: [{ required: true, message: "密码必填" }]
      }
    };
  },
  methods: {
    login() {
      let notice;
      this.$refs.form.validate(isValid => {
        if (isValid) {
          //   alert("成功登陆")
          notice = create(Notice, {
            title: "sdsd",
            message: "登陆！！",
            duration: 1000
          });
        } else {
          //   alert("出错了")
          notice = create(Notice, {
            title: "sdsd",
            message: "有错",
            duration: 1000
          });
        }
        notice.show();
      });
    }
  }
};
</script>

<style>
</style>