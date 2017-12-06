<template>
    <div id="login">
        <!-- head -->
        <header id="header" style="display:block;">
            <span class="icon icon-goback" @click="back()"></span>
            <span class="txt-header">京东登录</span>
        </header>
        <!-- head -->

        <!-- section -->
        <section class="page">
            <div class="login-tab" style="display:block">
                <ul class="username-login login-selected J_ping">
                    <span id="account_login_txt">账号密码登录</span>
                </ul>
                <ul class="sms-login J_ping">
                    <span id="sms_login_txt">短信验证码登录</span>
                </ul>
            </div>

            <div class="wrap loginPage">
                <div id="username_login" class="login-wrap login-wrap-active">
                    <div class="input-container">
                        <div class="txt-username">账号</div>
                        <input id="username" class="acc-input username txt-input J_ping" type="text" value="" placeholder="用户名/邮箱/已验证手机" autocomplete="off">
                        <i class="icon icon-clear" style="display:none"></i>
                    </div>

                    <div class="input-container">
                        <div class="txt-password">密码</div>
                        <input id="password" type="password" class="acc-input password txt-input J_ping" placeholder="请输入密码" autocomplete="off">
                        <i class="icon icon-clear"></i>
                        <label class="label-checkbox J_ping">
                            <input id="onOff_pwd" type="checkbox">
                            <div class="checkbtn"></div>
                        </label>
                    </div>

                    <div id="input-code" class="input-container" style="display:none;">
                        <div class="txt-imgverify">验证码</div>
                        <input id="code" class="acc-input imgverify J_ping" type="text" placeholder="请输入图片验证码" autocomplete="off" size="11" maxlength="6" >
                        <span class="code-box">
                            <img id="imgCode" src="" alt="" class="J_ping">
                        </span>
                        <i class="icon icon-clear"></i>
                    </div>
                </div>

                <!--短信验证登录-->
                <div id="sms_login" class="login-wrap">
                    <div id="img_code_box" class="input-container" style="display:none;">
                        <input class="acc-input sms-img-verify J_ping" id="smsCode" type="text" placeholder="请输入图片验证码" autocomplete="off" onblur="CtoH(this);" size="11" maxlength="6">
                        <span class="sms-code-box">
                            <img id="smsImgCode" src="" alt="" class="J_ping">
                        </span>
                        <i class="icon icon-clear"></i>
                    </div>
                    <div class="sms-input-box">
                        <div class="input-container">
                            <label class="area-box J_ping" report-eventid="MLoginRegister_AreaCode">
                                <span class="area_code" code="86">+86</span>
                                <i class="area_icon"></i>
                            </label>
                            <input type="tel" id="telphone" class="acc-input telphone sms-txt-input J_ping" placeholder="请输入手机号">
                            <i class="icon icon-clear"></i>
                        </div>
                        <button data-mescode="true" class="mesg-code mesg-disable J_ping" report-eventid="MLoginRegister_GetVerification">获取验证码</button>
                    </div>
                    <div class="input-container">
                        <input id="telCode" class="acc-input telCode sms-txt-input J_ping" type="text" placeholder="请输入收到的验证码" autocomplete="off">
                        <i class="icon icon-clear"></i>
                    </div>
                </div>

                <div class="notice">&nbsp;</div>
                <a href="javascript:;" id="loginBtn" class="btn J_ping" report-eventid="MLoginRegister_Login">登 录</a>
                <a href="javascript:;" id="loginOneStep" class="btn btn-onestep J_ping" data-src="" style="display:block;">一键登录</a>
                <input type="hidden" id="oneStep_switch" value="block">
                <div class="quick-nav clearfix" style="display:;">
			        <a href="javascript:;" class="J_ping findpwd">
                        <i class="icon icon-clock"></i>
                        <span class="txt-findpwd">忘记密码</span>
                    </a>
		            <a href="javascript:;" class="J_ping quickReg">
                        <i class="icon icon-reg"></i>
                        <span class="txt-quickReg">手机快速注册</span>
                    </a>
	            </div>
                <div class="quick-login" style="display:">
                    <h4 class="txt-otherLogin">其他登录方式</h4>
                    <a href="javascript:;" class="J_ping quick-qq">
                        <i class="icon icon-qq"></i>
                    </a>
                    <a href="javascript:;" class="J_ping quick-wx" style="display:">
                        <i class="icon icon-wx"></i>
                    </a>
                    <a href="" class="J_ping quick-money" style="display:none">
                        <i class="icon icon-money"></i>
                    </a>
                    <div class="agreement-tips">
                        <p>登录即代表您已同意
                            <a href="">京东隐私政策</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!-- section -->
    </div>
    
</template>

<script>
export default {
  name: "login",
  methods:{
    back(){
      history.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
*{
  text-align: center;
}
@function num($n) {
  @return $n/20;
}
html,
body {
  height: 100%;
}
a {
  text-decoration: none;
  color: #555;
}
li {
  list-style: none;
}
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: normal;
  font-style: normal;
}
img {
  border: 0;
}
input {
  border-radius: 0;
  border: 0;
  display: inline-block;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-family: PingFang-SC-Regular;
}
body {
  margin: 0;
  padding: 0;
  font-family: "Microsoft YaHei", Verdana, Arial, Helvetica, sans-serif;
  color: #3c3c3c;
  font-size: 14px;
  line-height: 1.4;
  background-color: #f4f4f4;
  word-wrap: break-word;
}
html {
  font-size: 100px;
  body {
    height: 100%;
    font-size: 0.7rem;
    text-align: center;
    margin: 0;
    line-height: 1.5;
    color: #333;
    background-color: #fff;
    #login {
      /*---------head-----------*/
      #header {
        width: 100%;
        height: 2.2rem;
        line-height: 2.2rem;
        width: 100%;
        background: #f9f9f9;
        color: #616161;
        font-size: 0.85rem;
        border-bottom: 0.05rem solid #bbb;
        z-index: 999;
        box-sizing: border-box;
        text-align: center;
        .icon {
          width: 1.1rem;
          height: 1.1rem;
          overflow: hidden;
          position: absolute;
          background-image: url(/static/img/iconBg.png);
          background-repeat: no-repeat;
          background-size: 100% auto;
        }
        .icon-goback {
          top: 0.6rem;
          left: 0.6rem;
          background-position: 0 num(-63rem);
        }
      }
      /*---------head-----------*/

      /*---------section-----------*/
      .page {
        background: white;
        overflow-y: auto;
        width: 100%;

        .login-tab {
          display: block;
          line-height: 2.2rem;
          font-size: 0.7rem;
          border-bottom: 1px solid #d7d7d7;
          .username-login {
            width: 50%;
            display: inline-block;
            float: left;
          }
          .login-selected > span {
            border-bottom: 2px solid #f23030;
            padding: 0.65rem 0.5rem;
          }
          .sms-login {
            width: 50%;
            display: inline-block;
          }
        }

        .wrap {
          max-width: 37.5rem;
          margin: 0 auto;
          padding: 0 1rem 1rem 1rem;
          .login-wrap {
            display: none;
          }
          .login-wrap-active {
            display: block;
          }
          .input-container {
            position: relative;
            width: 100%;
            height: 2.4rem;
            line-height: 2.4rem;
            overflow: hidden;
            padding: 0 0.25rem;
            background-color: #fff;
            border-bottom: 1px solid #d7d7d7;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            & > div {
              position: absolute;
              width: 3rem;
              display: inline-block;
              font-family: PingFang-SC-Regular;
              text-align: left;
            }
            .username {
              width: 100%;
              padding: 0 1.5rem 0 3rem;
            }
            .icon-clear {
              top: 0.13rem;
              right: 0.1rem;
              background-position: 0 0;
            }
            .password {
              width: 100%;
              padding: 0 3.5rem 0 3rem;
            }
            .password + .icon-clear {
              right: 2.25rem;
            }
            .label-checkbox {
              position: absolute;
              right: 0.25rem;
              top: 0.75rem;
              height: 0.9rem;
              overflow: hidden;
              z-index: 99;
              input {
                display: none;
              }
              .checkbtn {
                display: block;
                width: 1.5rem;
                height: 0.9rem;
                background-image: url(/static/img/hide_password.png);
                background-repeat: no-repeat;
                background-size: 100% auto;
                background-clip: padding-box;
                color: #fff;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
              }
            }
            .imgverify {
              width: 100%;
              padding: 0 0.8rem 0 0.6rem;
            }
            .code-box {
              width: 3.75rem;
              height: 1.15rem;
              right: 0.25rem;
              top: 0.625rem;
              border-left: 1px solid #d7d7d7;
              img {
                width: 3.75rem;
                height: 1.5rem;
                margin-top: -1.4rem;
                border: 1px solid transparent;
              }
            }
            .code-box + .icon-clear {
              right: 4.25rem;
            }
          }
          /*----------短信登录验证----------*/
          .login-wrap {
            // display: none;
            .input-container {
              position: relative;
              width: 100%;
              height: 2.4rem;
              line-height: 2.4rem;
              overflow: hidden;
              padding: 0 0.25rem;
              background-color: #fff;
              border-bottom: 1px solid #d7d7d7;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
              .sms-img-verify {
                width: 100%;
                padding: 0 4rem 0 0;
              }
              .sms-code-box {
                width: 4.5rem;
                height: 1.15rem;
                right: 0;
                top: 0.625rem;
                border-left: 1px solid #d7d7d7;
                img {
                  width: 4rem;
                  height: 1.5rem;
                  margin-top: -1.4rem;
                  border: 1px solid transparent;
                }
              }
              .sms-code-box + .icon-clear {
                right: 4.6rem;
              }
              .telCode {
                width: 100%;
                padding-right: 1.6rem;
                padding-left: 0;
              }
              .icon-clear {
                top: 0.65rem;
                right: 0.5rem;
                background-position: 0 0;
              }
            }
            .sms-input-box {
              position: relative;
              .input-container {
                position: relative;
                width: 100%;
                height: 2.4rem;
                line-height: 2.4rem;
                overflow: hidden;
                padding: 0 0.25rem;
                background-color: #fff;
                border-bottom: 1px solid #d7d7d7;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                .area-box {
                  position: absolute;
                  width: 3.1rem;
                  text-align: right;
                  .area_icon {
                    width: 0;
                    height: 0;
                    border-left: 0.2rem solid transparent;
                    border-right: 0.2rem solid transparent;
                    border-top: 0.25rem solid #ababab;
                    display: inline-block;
                    margin: 0 0.35rem 0 0.1rem;
                    padding-top: 0.05rem;
                  }
                }
                .telphone {
                  width: 100%;
                  padding-left: 3rem;
                  padding-right: 6.5rem;
                  .telphone + .icon-clear {
                    right: 5.9rem;
                  }
                }
              }
              .sms-input-box > .mesg-code {
                width: 5.9rem;
                border-left: 1px solid #d7d7d7;
                padding: 0;
                height: 1.15rem;
                line-height: 1.15rem;
                top: 0.625rem;
                outline: 0;
                background-color: #fff;
                -webkit-box-shadow: none;
                box-shadow: none;
              }
              .mesg-disable {
                background-color: #eee;
                color: #848689;
                border-radius: 2px;
                -webkit-box-shadow: 0 0 0 1px #eee;
                box-shadow: 0 0 0 1px #eee;
              }
            }
          }
          /*----------短信登录验证----------*/

          .notice {
            font-size: 0.6rem;
            line-height: 1.5rem;
            color: #f23030;
            min-height: 0.75rem;
            text-align: left;
          }

          .btn {
            display: block;
            height: 2.25rem;
            line-height: 2.3rem;
            background-color: #eee;
            border-radius: 2px;
            border: 0;
          }

          .btn-onestep {
            border: 1px solid #f23030;
            color: #f23030;
            background: #fff;
            margin-top: 0.5rem;
          }

          .quick-nav {
            margin-top: 1rem;
            text-align: center;
          }
          .clearfix:after,
          .clearfix:before {
            content: "";
            display: table;
          }
          .clearfix:after {
            clear: both;
          }
          .quick-nav a {
            color: #333;
            text-indent: 1.25rem;
            line-height: 1.1rem;
            font-family: PingFang-SC-Regular;
            font-size: 0.6rem;
          }
          .quick-nav a:first-child {
            float: left;
            .icon {
              width: 1.1rem;
              height: 1.1rem;
              overflow: hidden;
              position: absolute;
              background-image: url(/static/img/iconBg.png);
              background-repeat: no-repeat;
              background-size: 100% auto;
            }
            .icon-clock {
              background-position: 0 -1.15rem;
            }
          }
          .quick-nav a:last-child {
            float: right;
            .icon {
              width: 1.1rem;
              height: 1.1rem;
              overflow: hidden;
              position: absolute;
              background-image: url(/static/img/iconBg.png);
              background-repeat: no-repeat;
              background-size: 100% auto;
            }
            .icon-reg {
              background-position: 0 -2.1rem;
            }
          }

          .quick-login {
            margin-top: 5.25rem;
            height: 4.25rem;
            position: relative;
            padding: 1.225rem 0.5rem 0 0.5rem;
            border-top: 1px solid #d7d7d7;
            h4 {
              position: absolute;
              top: -0.95rem;
              left: 50%;
              background-color: white;
              padding: 0.25rem 0.75rem;
              color: #bfbfbf;
              -webkit-transform: translateX(-50%);
              transform: translateX(-50%);
            }
            a {
              position: relative;
              width: 3.6rem;
              color: #616161;
              margin: 0 0.5rem;
              font-size: 0.7rem;
              display: inline-block;
              .icon-qq {
                left: 1.25rem;
                background-position: 0 -129px;
                width: 22px;
                height: 22px;
              }
              .icon-wx {
                left: 1.25rem;
                background-position: 0 -155px;
                width: 22px;
                height: 22px;
              }
              .icon-money {
                left: 1.25rem;
                background-position: 0 -221px;
                width: 22px;
                height: 22px;
              }
            }
            .agreement-tips {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 1.5rem;
              font-size: 0.7rem;
              line-height: 1.5rem;
              a {
                width: auto;
                margin: 0;
                color: #333;
                text-decoration: underline;
              }
            }
          }
        }
      }
      /*---------section-----------*/
      html body #login .page .wrap .quick-nav {
        margin-top: 5rem;
        text-align: center;
      }
      .btn,
      .icon {
        display: block;
      }
      .icon-clear,
      .label-checkbox input {
        display: none;
      }

      .btn-onestep:active,
      .btn-onestep:hover,
      .btn-onestep:visited {
        color: #f23030 !important;
      }
      .btn,
      .btn:active,
      .btn:hover,
      .btn:visited {
        color: #848689;
      }
      .icon {
        width: 1.1rem;
        height: 1.1rem;
        overflow: hidden;
        position: absolute;
        background-image: url(/static/img/iconBg.png);
        background-repeat: no-repeat;
        background-size: 100% auto;
      }
      .icon-clear {
        top: 0.65rem;
        right: 0.5rem;
        background-position: 0 0;
      }
    }
  }
}
</style>
