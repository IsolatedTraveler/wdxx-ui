$(function () {
  var baseUrl = getServiceUrl();
  var imgUrl = '';
  function getServiceUrl() {
    try {
      var path = window.document.location.href;
      var index_length = path.indexOf('/webs/');
      url = path.substr(0, index_length + 6);
      //url = path + "";
      var baseurl = "";
      $.ajax({
        type: "GET",
        async: false,
        dataType: "json",
        url: url + "common/printUrl.json",
        cache: false,
        success: function (data) {
          $('#qym').html(data.qym)
          $('#qym1').html(data.qym1)
          $('#qym2').html(data.qym2)
          var inurl = data.inurl;
          var outurl = data.outurl;
          var curWwwPath = window.document.location.href;
          var pathName = window.document.location.pathname;
          var pos = curWwwPath.indexOf(pathName);
          var localhostPaht = curWwwPath.substring(0, pos);
          var printurl_arr = data.printurl;
          //优先取打印地址
          for (var i = 0; i < printurl_arr.length; i++) {
            if (printurl_arr[i].indexOf(localhostPaht) >= 0) {
              baseurl = printurl_arr[i];
            }
          }
          if (!baseurl) {
            //取内网地址
            if (inurl.indexOf(localhostPaht) >= 0) {
              baseurl = inurl;
            } else {//取外网地址
              baseurl = outurl;
            }
          }
        },
        error: function (err) {
          alert('获取数据服务器地址出错');
          return;
        }
      });
      return baseurl;
    } catch (e) {

    }
  }
  function getConfig(key) {
    try {
      var path = window.document.location.href, index_length = path.indexOf('/webs/'), that = this
        , url = path.substr(0, index_length + 6) + "common/printUrl.json";
      var value = "";
      $.ajax({
        type: "GET",
        async: false,
        dataType: "json",
        url: url,
        cache: false,
        success: function (data) {
          if (data[key]) {
            value = data[key];
          }
        },
        error: function (err) {
          alert('获取配置信息出错【' + key + "】");
          return;
        }
      });
      return value;
    } catch (e) {
      that.openErrorTracePanel('获取数据服务器地址出错');
    }
  }
  function getUrlParams(url) {
    try {
      var url = url || location.search; //获取url中"?"符后的字串
      url = decodeURI(url)
      var params = {};
      if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var datas = str.split("&");
        for (var i = 0; i < datas.length; i++) {
          var tempData = datas[i].split("=");
          params[tempData[0]] = tempData[1];
        }
      }
      return params;
    } catch (e) {
      openErrorTracePanel(e);
    }
  }
  function openErrorTracePanel(exception) {
    var text = exception.stack || exception.message;//IE9及以下stack为undefined，显示message
    layer.open({
      type: 1
      , title: '系统异常-请复制异常信息告知系统供应商' //不显示标题栏
      , closeBtn: false
      , area: ['600px', '400px']
      , shade: 0.1
      , id: 'LAY_layuipro' //设定一个id，防止重复弹出
      , resize: false
      , btn: ['确定']
      , btnAlign: 'c'
      , moveType: 1 //拖拽模式，0或者1
      , content: '<div id="errmsg_div" style="padding: 20px 50px 20px 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">' + text + '</div>'
    });
  }
  function $getData(url, data, success, error, type) {
    var param_query = { "data": JSON.stringify(data) };
    var encrypt = new JSEncrypt();
    if (encrypt && sha256) {
      var publickey = getConfig("publickey");
      var certno = getConfig("certno");
      encrypt.setPublicKey(publickey);
      var sha_s = sha256.sha256(param_query.data);
      var mw = encrypt.encrypt(sha_s);
      var sstoken = { "sign": mw, "certno": certno };
      param_query.sstoken = JSON.stringify(sstoken);
    }
    $.ajax({
      url: baseUrl + url,
      type: type || "POST",
      data: param_query,
      async: false,
      success: function (result) {
        result = JSON.parse(result);
        success(result);
      },
      error: function (e, m, n) {
        error(e, m, n)
      }
    });
  }
  //提交数据
  function $commonCommitHttppost(url, data) {
    var param = { "data": JSON.stringify(data) };
    var resultData = "";
    var encrypt = new JSEncrypt();
    if (encrypt && sha256) {
      var publickey = jktjfm.getConfig("publickey");
      var certno = jktjfm.getConfig("certno");
      encrypt.setPublicKey(publickey);
      var sha_s = sha256.sha256(param.data);
      var mw = encrypt.encrypt(sha_s);
      var sstoken = { "sign": mw, "certno": certno };
      param.sstoken = JSON.stringify(sstoken);
    }
    $.ajax({
      url: baseUrl + url,
      type: "POST",
      data: param,
      async: false,
      success: function (result) {
        resultData = result;
      }
    });
    if (resultData) {
      resultData = JSON.parse(resultData);
    }
    return resultData;
  }
  function callbackdata(json) {
    var data = $("#bodyDom").html()
    var base64 = new Base64();
    for (var i = 0; i < json.mx.length; i++) {
      json.mx[i].xynr = base64.encode(data);
    }
    //提交数据保存base64到明细表 e_qyjl_mx
    var returndata1 = $commonCommitHttppost("/rest/commitData/020303/4", json);
    if (returndata1.code == 1) {
      layer.msg("保存成功", { icon: 6 })
    }
  }
  qyjl = {
    print: function () {
      window.print();
    },
    //处理带代码与‘-’的数据
    getName: function (v) {
      try {
        return v.split('-')[1] || '';
      } catch (e) {
        return '';
      }
    },
  }
  //得到jlid  和uesr信息
  var urlParam = getUrlParams(), finalJson = {};
  //得到数据  判断check  checked --表示查看 saved --表示保存 
  if (urlParam.check == 'saved') {
    // var base64 =new Base64()
    // urlParam.json = base64.decode(urlParam.json)
    //var jsonData = JSON.parse(JSON.parse(urlParam.json))
    //通过签约jlid查询出数据渲染到页面上
    $getData("/rest/queryDataBySql/020303/6", { "jlid": urlParam.jlid }, function (resdata) {
      if (resdata.code == 1) {
        resdata = resdata.data;
        var qyxyjl = resdata[0]
        imgXm = qyxyjl.xm
        var tdid = qyxyjl.qytdid
        //服务团队名称 负责人 家庭住址
        $("td[name=fwtdmc]").html(qyxyjl.mc)
        $("td[name=fzr]").html(qyxyjl.zrr)
        $("td[name=jtzz]").html(qyxyjl.xzzmph)
        $(`span[name=fwjg]`).html(qyxyjl.fwjg || '')
        var dx = changeMoneyToChinese(qyxyjl.fwjg)
        $(`span[name=fwjgDx]`).html(dx || '')
        //甲方服务 信息  姓名 等等。。。
        for (var i = 0; i < resdata.length; i++) {
          $(`tr[name='jffw${i}']>td[name='xm']`).html(resdata[i].xm || '')
          $(`tr[name='jffw${i}']>td[name='xb']`).html(qyjl.getName(resdata[i].xb))
          $(`tr[name='jffw${i}']>td[name='sfzh']`).html(resdata[i].sfzh || '')
          $(`tr[name='jffw${i}']>td[name='cygx']`).html(qyjl.getName(resdata[i].rygx) || '')
          $(`tr[name='jffw${i}']>td[name='lxfs']`).html(resdata[i].brdh || '')
          $(`tr[name='jffw${i}']>td[name='fwbdm']`).html(resdata[i].qyfwbdm || '')
          if (resdata[i].fwjg) {
            resdata[i].fwjg = parseFloat(resdata[i].fwjg).toFixed(2)
            $(`tr[name='jffw${i}']>td[name='fwbjg']`).html(resdata[i].fwjg || '')
          }
        }
        //初始化签约日期
        var qyrq = qyxyjl.qyrq || '';
        $(".qyrqn").text(qyrq.substr(0, 4));
        $(".qyrqy").text(qyrq.substr(5, 2));
        $(".qyrqr").text(qyrq.substr(8, 2));
        //保存信息进json 
        //家庭医生团队负责电话
        //查询手写图片地址
        $getData("/rest/queryDataBySql/020303/16", { "daid": qyxyjl.daid, "ywid": urlParam.jlid }, function (resdata) {
          if (resdata.code == 1 && resdata.data.length) {
            baseurlImg = getServiceUrl()
            if (resdata.data[0].sxtpdz != null && resdata.data[0].sxtpdz != 'error') {
              imgUrl = baseurlImg + '/rest/downLoadFileById?fileId=' + resdata.data[0].sxtpdz
            }
          }
        })
        //微信端的签名图片
        $getData("/rest/queryDataBySql/020303/18", { "jlid": urlParam.jlid }, function (resdata) {
          if (resdata.code == 1 && resdata.data.length) {
            imgUrl = resdata.data[0].qmtp
          }
        })
        //医生团队数据
        $getData("/rest/queryDataBySql/020303/13", { tdid: tdid }, function (resdata) {
          if (resdata.code == 1) {
            var resD = resdata.data
            for (var i = 0; i < resD.length; i++) {
              $(`tr[name=yffw${i}]>td[name=xm]`).html(resD[i].ysxm || '')
              $(`tr[name=yffw${i}]>td[name=xb]`).html(resD[i].xb || "")
              $(`tr[name=yffw${i}]>td[name=zyfw]`).html(resD[i].zyfw || '')
              $(`tr[name=yffw${i}]>td[name=zc]`).html(resD[i].zc || '')
              $(`tr[name=yffw${i}]>td[name=lxdh]`).html(resD[i].lxdh || '')
            }
          }
        });
        //单位名称 地址 负责人 监督电话 --乙方
        $getData("/rest/queryDataBySql/020303/10", { "id": qyxyjl.qyjgid.toString() }, function (data) {
          var jgxx = data.data;
          //$('td[name=fwtdmc]').html(jgxx[0].mc)
          $('td[name=dwdz]').html(jgxx[0].szddz)
          $('td[name=lxr]').html(jgxx[0].lxr)
          //$('td[name=lxdh]').html(jgxx[0].lxdh)
        });
      } else {
      }
      iframeload = true;
      function changeMoneyToChinese(money) {
        var cnNums = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"); //汉字的数字  
        var cnIntRadice = new Array("", "拾", "佰", "仟"); //基本单位  
        var cnIntUnits = new Array("", "万", "亿", "兆"); //对应整数部分扩展单位  
        var cnDecUnits = new Array("角", "分", "毫", "厘"); //对应小数部分单位  
        //var cnInteger = "整"; //整数金额时后面跟的字符  
        var cnIntLast = "元"; //整型完以后的单位  
        var maxNum = 999999999999999.9999; //最大处理的数字  

        var IntegerNum; //金额整数部分  
        var DecimalNum; //金额小数部分  
        var ChineseStr = ""; //输出的中文金额字符串  
        var parts; //分离金额后用的数组，预定义  
        // if (money == "") {
        //     return "";
        // }
        money = parseFloat(money);
        if (money >= maxNum) {
          $.alert('超出最大处理数字');
          return "";
        }
        if (money == 0) {
          //ChineseStr = cnNums[0]+cnIntLast+cnInteger;  
          ChineseStr = cnNums[0] + cnIntLast
          //document.getElementById("show").value=ChineseStr;  
          return ChineseStr;
        }
        money = money.toString(); //转换为字符串  
        if (money.indexOf(".") == -1) {
          IntegerNum = money;
          DecimalNum = '';
        } else {
          parts = money.split(".");
          IntegerNum = parts[0];
          DecimalNum = parts[1].substr(0, 4);
        }
        if (parseInt(IntegerNum, 10) > 0) {//获取整型部分转换  
          zeroCount = 0;
          IntLen = IntegerNum.length;
          for (i = 0; i < IntLen; i++) {
            n = IntegerNum.substr(i, 1);
            p = IntLen - i - 1;
            q = p / 4;
            m = p % 4;
            if (n == "0") {
              zeroCount++;
            } else {
              if (zeroCount > 0) {
                ChineseStr += cnNums[0];
              }
              zeroCount = 0; //归零  
              ChineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
            }
            if (m == 0 && zeroCount < 4) {
              ChineseStr += cnIntUnits[q];
            }
          }
          ChineseStr += cnIntLast;
          //整型部分处理完毕  
        }
        if (DecimalNum != '') {//小数部分  
          decLen = DecimalNum.length;
          for (i = 0; i < decLen; i++) {
            n = DecimalNum.substr(i, 1);
            if (n != '0') {
              ChineseStr += cnNums[Number(n)] + cnDecUnits[i];
            }
          }
        }
        if (ChineseStr == '') {
          //ChineseStr += cnNums[0]+cnIntLast+cnInteger;  
          ChineseStr += cnNums[0] + cnIntLast;
        }/* else if( DecimalNum == '' ){ 
                  ChineseStr += cnInteger; 
                  ChineseStr += cnInteger; 
              } */
        return ChineseStr;
      }
    });
    if (urlParam.json) {
      var jsonData = JSON.parse(decodeURI(urlParam.json))
      callbackdata(jsonData) //保存base64页面到服务器
    }
  } else if (urlParam.check == 'checked') {
    //通过签约jlid查询出数据渲染到页面上
    $getData("/rest/queryDataBySql/020303/6", { "jlid": urlParam.jlid }, function (resdata) {
      if (resdata.code == 1) {
        resdata = resdata.data;
        var qyxyjl = resdata[0]
        imgXm = qyxyjl.xm
        var tdid = qyxyjl.qytdid
        //服务团队名称 负责人 家庭住址
        $("td[name=fwtdmc]").html(qyxyjl.mc)
        $("td[name=fzr]").html(qyxyjl.zrr)
        $("td[name=jtzz]").html(qyxyjl.xzzmph)
        $(`span[name=fwjg]`).html(qyxyjl.fwjg || '')
        var dx = changeMoneyToChinese(qyxyjl.fwjg)
        $(`span[name=fwjgDx]`).html(dx || '')
        //甲方服务 信息  姓名 等等。。。
        for (var i = 0; i < resdata.length; i++) {
          $(`tr[name='jffw${i}']>td[name='xm']`).html(resdata[i].xm || '')
          $(`tr[name='jffw${i}']>td[name='xb']`).html(qyjl.getName(resdata[i].xb))
          $(`tr[name='jffw${i}']>td[name='sfzh']`).html(resdata[i].sfzh || '')
          $(`tr[name='jffw${i}']>td[name='cygx']`).html(qyjl.getName(resdata[i].rygx) || '')
          $(`tr[name='jffw${i}']>td[name='lxfs']`).html(resdata[i].brdh || '')
          $(`tr[name='jffw${i}']>td[name='fwbdm']`).html(resdata[i].qyfwbdm || '')
          if (resdata[i].fwjg) {
            resdata[i].fwjg = parseFloat(resdata[i].fwjg).toFixed(2)
            $(`tr[name='jffw${i}']>td[name='fwbjg']`).html(resdata[i].fwjg || '')
          }
        }
        //初始化签约日期
        var qyrq = qyxyjl.qyrq || '';
        $(".qyrqn").text(qyrq.substr(0, 4));
        $(".qyrqy").text(qyrq.substr(5, 2));
        $(".qyrqr").text(qyrq.substr(8, 2));
        //保存信息进json 
        //家庭医生团队负责电话
        //查询手写图片地址
        $getData("/rest/queryDataBySql/020303/16", { "daid": qyxyjl.daid, "ywid": urlParam.jlid }, function (resdata) {
          if (resdata.code == 1 && resdata.data.length) {
            baseurlImg = getServiceUrl()
            if (resdata.data[0].sxtpdz != null && resdata.data[0].sxtpdz != 'error') {
              imgUrl = baseurlImg + '/rest/downLoadFileById?fileId=' + resdata.data[0].sxtpdz
              $(".imgUrl").attr('src', imgUrl)
              // $(".qyrq1").css("margin-top",'-16px')
            }
          }
        })
        //微信端的签名图片
        $getData("/rest/queryDataBySql/020303/18", { "jlid": urlParam.jlid }, function (resdata) {
          if (resdata.code == 1 && resdata.data.length) {
            imgUrl = resdata.data[0].qmtp
          }
        })
        //医生团队数据
        $getData("/rest/queryDataBySql/020303/13", { tdid: tdid }, function (resdata) {
          if (resdata.code == 1) {
            var resD = resdata.data
            for (var i = 0; i < resD.length; i++) {
              $(`tr[name=yffw${i}]>td[name=xm]`).html(resD[i].ysxm || '')
              $(`tr[name=yffw${i}]>td[name=xb]`).html(resD[i].xb || "")
              $(`tr[name=yffw${i}]>td[name=zyfw]`).html(resD[i].zyfw || '')
              $(`tr[name=yffw${i}]>td[name=zc]`).html(resD[i].zc || '')
              $(`tr[name=yffw${i}]>td[name=lxdh]`).html(resD[i].lxdh || '')
            }
          }
        });
        //单位名称 地址 负责人 监督电话 --乙方
        $getData("/rest/queryDataBySql/020303/10", { "id": qyxyjl.qyjgid.toString() }, function (data) {
          var jgxx = data.data;
          //$('td[name=fwtdmc]').html(jgxx[0].mc)
          $('td[name=dwdz]').html(jgxx[0].szddz)
          $('td[name=lxr]').html(jgxx[0].lxr)
          //$('td[name=lxdh]').html(jgxx[0].lxdh)
        });
      } else {
      }
      iframeload = true;
      function changeMoneyToChinese(money) {
        var cnNums = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"); //汉字的数字  
        var cnIntRadice = new Array("", "拾", "佰", "仟"); //基本单位  
        var cnIntUnits = new Array("", "万", "亿", "兆"); //对应整数部分扩展单位  
        var cnDecUnits = new Array("角", "分", "毫", "厘"); //对应小数部分单位  
        //var cnInteger = "整"; //整数金额时后面跟的字符  
        var cnIntLast = "元"; //整型完以后的单位  
        var maxNum = 999999999999999.9999; //最大处理的数字  

        var IntegerNum; //金额整数部分  
        var DecimalNum; //金额小数部分  
        var ChineseStr = ""; //输出的中文金额字符串  
        var parts; //分离金额后用的数组，预定义  
        // if (money == "") {
        //     return "";
        // }
        money = parseFloat(money);
        if (money >= maxNum) {
          $.alert('超出最大处理数字');
          return "";
        }
        if (money == 0) {
          //ChineseStr = cnNums[0]+cnIntLast+cnInteger;  
          ChineseStr = cnNums[0] + cnIntLast
          //document.getElementById("show").value=ChineseStr;  
          return ChineseStr;
        }
        money = money.toString(); //转换为字符串  
        if (money.indexOf(".") == -1) {
          IntegerNum = money;
          DecimalNum = '';
        } else {
          parts = money.split(".");
          IntegerNum = parts[0];
          DecimalNum = parts[1].substr(0, 4);
        }
        if (parseInt(IntegerNum, 10) > 0) {//获取整型部分转换  
          zeroCount = 0;
          IntLen = IntegerNum.length;
          for (i = 0; i < IntLen; i++) {
            n = IntegerNum.substr(i, 1);
            p = IntLen - i - 1;
            q = p / 4;
            m = p % 4;
            if (n == "0") {
              zeroCount++;
            } else {
              if (zeroCount > 0) {
                ChineseStr += cnNums[0];
              }
              zeroCount = 0; //归零  
              ChineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
            }
            if (m == 0 && zeroCount < 4) {
              ChineseStr += cnIntUnits[q];
            }
          }
          ChineseStr += cnIntLast;
          //整型部分处理完毕  
        }
        if (DecimalNum != '') {//小数部分  
          decLen = DecimalNum.length;
          for (i = 0; i < decLen; i++) {
            n = DecimalNum.substr(i, 1);
            if (n != '0') {
              ChineseStr += cnNums[Number(n)] + cnDecUnits[i];
            }
          }
        }
        if (ChineseStr == '') {
          //ChineseStr += cnNums[0]+cnIntLast+cnInteger;  
          ChineseStr += cnNums[0] + cnIntLast;
        }/* else if( DecimalNum == '' ){ 
                  ChineseStr += cnInteger; 
                  ChineseStr += cnInteger; 
              } */
        return ChineseStr;
      }
    });
  }
});
//在文档加载完成后执行
$(function () {
  layui.use('layer', function () {
    var layer = layui.layer;
  });
});
