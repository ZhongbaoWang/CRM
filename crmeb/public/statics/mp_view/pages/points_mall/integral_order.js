(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/points_mall/integral_order"],{"0245":function(t,e,n){"use strict";(function(t){n("6e38");i(n("66fd"));var e=i(n("bdd8"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"079e":function(t,e,n){"use strict";n.r(e);var i=n("67ed"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},6747:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"67ed":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("4f72"),s=n("3474"),a=(n("f15c"),n("a1ea"),n("c6cd")),o=n("26cb"),r=d(n("c83f"));function d(t){return t&&t.__esModule?t:{default:t}}var u=function(){Promise.all([n.e("common/vendor"),n.e("components/couponListWindow/index")]).then(function(){return resolve(n("6411"))}.bind(null,n)).catch(n.oe)},c=function(){n.e("components/addressWindow/index").then(function(){return resolve(n("9250"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/orderGoods/index").then(function(){return resolve(n("e247"))}.bind(null,n)).catch(n.oe)},f=function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("f497"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("components/Authorize").then(function(){return resolve(n("420f"))}.bind(null,n)).catch(n.oe)},p={components:{couponListWindow:u,addressWindow:c,orderGoods:l,home:f,authorize:h},mixins:[r.default],data:function(){return{textareaStatus:!0,cartArr:[{name:"微信支付",icon:"icon-weixin2",value:"weixin",title:"使用微信快捷支付",payStatus:1},{name:"支付宝支付",icon:"icon-zhifubao",value:"alipay",title:"使用线上支付宝支付",payStatus:1},{name:"余额支付",icon:"icon-yuezhifu",value:"yue",title:"可用余额:",payStatus:1},{name:"线下支付",icon:"icon-yuezhifu1",value:"offline",title:"选择线下付款方式",payStatus:2}],formContent:"",payType:"weixin",openType:1,active:0,coupon:{coupon:!1,list:[],statusTile:"立即使用"},address:{address:!1},addressInfo:{},pinkId:0,addressId:0,couponId:0,cartId:"",BargainId:0,combinationId:0,seckillId:0,userInfo:{},mark:"",couponTitle:"请选择",coupon_price:0,useIntegral:!1,integral_price:0,integral:0,ChangePrice:0,formIds:[],status:0,is_address:!1,toPay:!1,shippingType:0,system_store:{},storePostage:0,contacts:"",contactsTel:"",mydata:{},storeList:[],store_self_mention:0,cartInfo:{},priceGroup:{},animated:!1,totalPrice:0,integralRatio:"0",pagesUrl:"",orderKey:"",offlinePostage:"",isAuto:!1,isShowAuth:!1,from:"",news:1,invTitle:"不开发票",special_invoice:!1,invoice_func:!1,header_type:"",invShow:!1,invList:[],invChecked:"",urlQuery:"",pay_close:!1,resData:{}}},computed:(0,o.mapGetters)(["isLogin"]),onLoad:function(t){if(this.from="routine",!t.unique)return this.$util.Tips({title:"请选择要购买的商品"},{tab:3,url:1});this.unique=t.unique,this.num=t.num,this.couponId=t.couponId||0,this.pinkId=t.pinkId?parseInt(t.pinkId):0,this.addressId=t.addressId||0,this.cartId=t.cartId,this.is_address=!!t.is_address,this.news=t.new&&"0"!==t.new?1:0,this.invChecked=t.invoice_id||"",this.header_type=t.header_type||"1",this.couponTitle=t.couponTitle||"请选择",this.textareaStatus=!0,this.isLogin&&0==this.toPay?(this.getaddressInfo(),this.getConfirm(),this.$nextTick((function(){this.$refs.addressWindow.getAddressList()}))):(0,a.toLogin)()},onShow:function(){var e=this;t.$on("handClick",(function(n){n&&(e.system_store=n.address),t.$off("handClick")}))},methods:{getInvoiceList:function(){var e=this;t.showLoading({title:"正在加载…"}),(0,s.invoiceList)().then((function(n){t.hideLoading(),e.invList=n.data.map((function(t){return t.id=t.id.toString(),t}));var i=e.invList.find((function(t){return t.id==e.invChecked}));if(i){var s="";s+=1===i.header_type?"个人":"企业",s+=1===i.type?"普通":"专用",s+="发票",e.invTitle=s}})).catch((function(e){t.showToast({title:e,icon:"none"})}))},onChangeFun:function(t){var e=t,n=e.action||null,i=void 0!=e.value?e.value:null;n&&this[n]&&this[n](i)},payClose:function(){this.pay_close=!1},goPay:function(){var e=this;if(!e.addressId)return e.$util.Tips({title:"请选择收货地址"});if(parseFloat(e.resData.integral)<parseFloat(e.cartInfo.price))return e.$util.Tips({title:"积分不足！"});var n={addressId:e.addressId,mark:e.mark,unique:this.cartInfo.unique,num:this.resData.num};(0,i.integralOrderCreate)(n).then((function(e){t.redirectTo({url:"/pages/points_mall/integral_order_status?order_id=".concat(e.data.result.orderId)})})).catch((function(n){return t.hideLoading(),e.$util.Tips({title:n})}))},changeClose:function(){this.$set(this.address,"address",!1)},computedPrice:function(){var t=this,e=this.shippingType;postOrderComputed(this.orderKey,{addressId:this.addressId,useIntegral:this.useIntegral?1:0,couponId:this.couponId,shipping_type:parseInt(e)+1,payType:this.payType}).then((function(n){var i=n.data.result;i&&(t.totalPrice=i.pay_price,t.integral_price=i.deduction_price,t.coupon_price=i.coupon_price,t.integral=t.useIntegral?i.SurplusIntegral:t.userInfo.integral,t.$set(t.priceGroup,"storePostage",1==e?0:i.pay_postage),t.$set(t.priceGroup,"storePostageDiscount",i.storePostageDiscount))}))},ChangCouponsClone:function(){this.$set(this.coupon,"coupon",!1)},changeTextareaStatus:function(){for(var t=0,e=this.coupon.list.length;t<e;t++)this.coupon.list[t].use_title="",this.coupon.list[t].is_use=0;this.textareaStatus=!0,this.status=0,this.$set(this.coupon,"list",this.coupon.list)},OnChangeAddress:function(t){this.textareaStatus=!0,this.addressId=t,this.address.address=!1,this.getaddressInfo()},bindHideKeyboard:function(t){this.mark=t.detail.value},getConfirm:function(){var t=this,e=this;(0,i.integralOrderConfirm)({unique:this.unique,num:this.num}).then((function(t){e.$set(e,"resData",t.data),e.$set(e,"cartInfo",t.data.productInfo)})).catch((function(e){return t.$util.Tips({title:e})}))},getBargainId:function(){var t=this,e=t.cartInfo,n=0,i=0;e.forEach((function(t,e,s){n=s[e].bargain_id,i=s[e].combination_id})),t.$set(t,"BargainId",parseInt(n)),t.$set(t,"combinationId",parseInt(i)),3==t.cartArr.length&&(n||i||t.seckillId)&&(t.cartArr[2].payStatus=0,t.$set(t,"cartArr",t.cartArr))},getaddressInfo:function(){var t=this;t.addressId?(0,s.getAddressDetail)(t.addressId).then((function(e){e.data.is_default=parseInt(e.data.is_default),t.addressInfo=e.data||{},t.addressId=e.data.id||0,t.address.addressId=e.data.id||0})):(0,s.getAddressDefault)().then((function(e){e.data.is_default=parseInt(e.data.is_default),t.addressInfo=e.data||{},t.addressId=e.data.id||0,t.address.addressId=e.data.id||0}))},couponTap:function(){var t=this;this.coupon.coupon=!0,this.coupon.list.forEach((function(e,n){e.id==t.couponId?e.is_use=1:e.is_use=0})),this.$set(this.coupon,"list",this.coupon.list)},car:function(){var t=this;t.animated=!1},onAddress:function(){var t=this;t.textareaStatus=!1,t.address.address=!0,t.pagesUrl="/pages/points_mall/user_address?unique=".concat(this.unique,"&num=").concat(this.num)},clickTextArea:function(){var t=this;this.$nextTick((function(){t.$refs.getFocus.focus()}))}}};e.default=p}).call(this,n("543d")["default"])},"8a0e":function(t,e,n){},bdd8:function(t,e,n){"use strict";n.r(e);var i=n("6747"),s=n("079e");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);n("c790");var o,r=n("f0c5"),d=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"5c488d18",null,!1,i["a"],o);e["default"]=d.exports},c790:function(t,e,n){"use strict";var i=n("8a0e"),s=n.n(i);s.a}},[["0245","common/runtime","common/vendor"]]]);