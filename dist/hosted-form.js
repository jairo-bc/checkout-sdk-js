(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{initializeHostedInput:()=>ae,notifyInitializeError:()=>se});const n=require("tslib"),r=function(e){function t(t){var n,r,i=this.constructor,a=e.call(this,t||"An unexpected error has occurred.")||this;return a.name="StandardError",a.type="standard",n=a,r=i.prototype,Object.setPrototypeOf?Object.setPrototypeOf(n,r):n.__proto__=r,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(a,i):a.stack=new Error(a.message).stack,a}return(0,n.__extends)(t,e),t}(Error),i=function(e){function t(t){var n=e.call(this,t||"Invalid arguments have been provided.")||this;return n.name="InvalidArgumentError",n.type="invalid_argument",n}return(0,n.__extends)(t,e),t}(r);function a(e){if(!/^(https?:)?\/\//.test(e))throw new i("The provided URL must be absolute.");var t=document.createElement("a");t.href=e;var n=t.port&&-1!==e.indexOf(t.hostname+":"+t.port)?t.port:"";return{hash:t.hash,hostname:t.hostname,href:t.href,origin:t.protocol+"//"+t.hostname+(n?":"+n:""),pathname:t.pathname,port:n,protocol:t.protocol,search:t.search}}function o(e){return a(0===e.hostname.indexOf("www")?e.href:e.href.replace(e.hostname,"www."+e.hostname))}const s=function(e,t,r){return t&&r?u(0,t,r):function(e){var t=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,n.__extends)(t,e),t}(e);return Object.getOwnPropertyNames(e.prototype).forEach((function(n){var r=Object.getOwnPropertyDescriptor(e.prototype,n);r&&"constructor"!==n&&Object.defineProperty(t.prototype,n,u(e.prototype,n,r))})),t}(e)};function u(e,t,r){if("function"!=typeof r.value)return r;var i=r.value;return{get:function(){var e=i.bind(this);return Object.defineProperty(this,t,(0,n.__assign)((0,n.__assign)({},r),{value:e})),e},set:function(e){i=e}}}function c(e,t){return e.type===t}const d=function(){function e(e){this._sourceOrigins=[a(e).origin,o(a(e)).origin],this._isListening=!1,this._listeners={}}return e.prototype.listen=function(){this._isListening||(this._isListening=!0,window.addEventListener("message",this._handleMessage))},e.prototype.stopListen=function(){this._isListening&&(this._isListening=!1,window.removeEventListener("message",this._handleMessage))},e.prototype.addListener=function(e,t){var n=this._listeners[e];n||(this._listeners[e]=n=[]),-1===n.indexOf(t)&&n.push(t)},e.prototype.removeListener=function(e,t){var n=this._listeners[e];if(n){var r=n.indexOf(t);r>=0&&n.splice(r,1)}},e.prototype.trigger=function(e){var t=this._listeners[e.type];t&&t.forEach((function(t){return t(e)}))},e.prototype._handleMessage=function(e){-1!==this._sourceOrigins.indexOf(e.origin)&&c(e.data,e.data.type)&&this.trigger(e.data)},(0,n.__decorate)([s],e.prototype,"_handleMessage",null),e}(),p=function(){function e(){}return e.prototype.setNonce=function(e){this._nonce=e},e.prototype.getNonce=function(){return this._nonce},e}();var l;function m(){return l=l||new p}const h=require("@bigcommerce/bigpay-client"),g=require("rxjs"),f=require("rxjs/operators"),_=function(){function e(e,t){this._targetWindow=t,this._targetOrigin="*"===e?"*":a(e).origin}return e.prototype.post=function(e,t){var n=this,r=this._targetWindow;if(window!==r){if(!r)throw new Error("Unable to post message because target window is not set.");var i=t&&(0,g.fromEvent)(window,"message").pipe((0,f.filter)((function(e){return e.origin===n._targetOrigin&&c(e.data,e.data.type)&&-1!==[t.successType,t.errorType].indexOf(e.data.type)})),(0,f.map)((function(e){if(t.errorType===e.data.type)throw e.data;return e.data})),(0,f.take)(1)).toPromise();return r.postMessage(e,this._targetOrigin),i}},e.prototype.setTarget=function(e){this._targetWindow=e},e}(),y=function(){function e(e){this._client=e}return e.prototype.submitPayment=function(e){var t=this;return new Promise((function(n,r){t._client.submitPayment(e,(function(e,i){e?r(t._transformResponse(e)):n(t._transformResponse(i))}))}))},e.prototype.initializeOffsitePayment=function(e,t){var n=this;return new Promise((function(){n._client.initializeOffsitePayment(e,null,t)}))},e.prototype._transformResponse=function(e){return{headers:e.headers,body:e.data,status:e.status,statusText:e.statusText}},e}(),v=require("lodash");function C(e,t){var n;return function(e){return void 0!==e.id}(e)?n=e.id:t&&t.length&&(n=t[0].id),{id:n,firstName:e.firstName,lastName:e.lastName,company:e.company,addressLine1:e.address1,addressLine2:e.address2,city:e.city,province:e.stateOrProvince,provinceCode:e.stateOrProvinceCode,postCode:e.postalCode,country:e.country,countryCode:e.countryCode,phone:e.phone,customFields:e.customFields}}const b=function(){function e(e){this._decimalPlaces=e}return e.prototype.toInteger=function(e){return Math.round(e*Math.pow(10,this._decimalPlaces))},e}();var E,I=["per_item_discount","percentage_discount","per_total_discount","shipping_discount","free_shipping"];function A(e){return{code:e.code,discount:e.displayName,discountType:I.indexOf(e.couponType)}}function T(e){return{code:e.code,discountedAmount:e.used,remainingBalance:e.remaining,giftCertificate:{balance:e.balance,code:e.code,purchaseDate:e.purchaseDate}}}function P(e,t,r){return void 0===r&&(r="id"),Object.keys(e).reduce((function(i,a){return(0,n.__spreadArrays)(i,e[a].map((function(e){return"giftCertificates"===a?function(e,t){var n=new b(t);return{id:e.id,imageUrl:"",name:e.name,amount:e.amount,amountAfterDiscount:e.amount,discount:0,integerAmount:n.toInteger(e.amount),integerAmountAfterDiscount:n.toInteger(e.amount),integerUnitPrice:n.toInteger(e.amount),integerUnitPriceAfterDiscount:n.toInteger(e.amount),integerDiscount:0,quantity:1,sender:e.sender,recipient:e.recipient,type:"ItemGiftCertificateEntity",attributes:[],variantId:null}}(e,t):function(e,t,n,r){void 0===r&&(r="id");var i=new b(n);return{id:e[r],imageUrl:e.imageUrl,amount:e.extendedListPrice,amountAfterDiscount:e.extendedSalePrice,discount:e.discountAmount,integerAmount:i.toInteger(e.extendedListPrice),integerAmountAfterDiscount:i.toInteger(e.extendedSalePrice),integerDiscount:i.toInteger(e.discountAmount),integerUnitPrice:i.toInteger(e.listPrice),integerUnitPriceAfterDiscount:i.toInteger(e.salePrice),downloadsPageUrl:e.downloadPageUrl,name:e.name,quantity:e.quantity,brand:e.brand,sku:e.sku,categoryNames:e.categoryNames,variantId:e.variantId,productId:e.productId,attributes:(e.options||[]).map((function(e){return{name:e.name,value:e.value}})),addedByPromotion:e.addedByPromotion,type:t}}(e,function(e){switch(e){case"physicalItems":return"ItemPhysicalEntity";case"digitalItems":return"ItemDigitalEntity";case"giftCertificates":return"ItemGiftCertificateEntity";default:return""}}(a),t,r)})))}),[])}function w(e){var t,n,r=e.cart.currency.decimalPlaces,i=new b(r);return{id:e.cart.id,items:P(e.cart.lineItems,r),currency:e.cart.currency.code,coupon:{discountedAmount:(0,v.reduce)(e.cart.coupons,(function(e,t){return e+t.discountedAmount}),0),coupons:e.cart.coupons.map(A)},discount:{amount:e.cart.discountAmount,integerAmount:i.toInteger(e.cart.discountAmount)},discountNotifications:(t=e.promotions,n=[],(t||[]).forEach((function(e){(e.banners||[]).forEach((function(e){n.push({placeholders:[],discountType:null,message:"",messageHtml:e.text})}))})),n),giftCertificate:{totalDiscountedAmount:(0,v.reduce)(e.giftCertificates,(function(e,t){return e+t.used}),0),appliedGiftCertificates:(0,v.keyBy)(e.giftCertificates.map(T),"code")},shipping:{amount:e.shippingCostTotal,integerAmount:i.toInteger(e.shippingCostTotal),amountBeforeDiscount:e.shippingCostBeforeDiscount,integerAmountBeforeDiscount:i.toInteger(e.shippingCostBeforeDiscount),required:(0,v.some)(e.cart.lineItems.physicalItems,(function(e){return e.isShippingRequired}))},subtotal:{amount:e.subtotal,integerAmount:i.toInteger(e.subtotal)},storeCredit:{amount:e.customer?e.customer.storeCredit:0},taxSubtotal:{amount:e.taxTotal,integerAmount:i.toInteger(e.taxTotal)},taxes:e.taxes,taxTotal:{amount:e.taxTotal,integerAmount:i.toInteger(e.taxTotal)},handling:{amount:e.handlingCostTotal,integerAmount:i.toInteger(e.handlingCostTotal)},grandTotal:{amount:e.grandTotal,integerAmount:i.toInteger(e.grandTotal)}}}!function(e){e.APPLEPAY="applepay",e.AMAZON_PAY_V2="amazonpay",e.BRAINTREE_PAYPAL="braintreepaypal",e.BRAINTREE_VENMO="braintreevenmo",e.BRAINTREE_PAYPAL_CREDIT="braintreepaypalcredit",e.BRAINTREE_PAYPAL_CREDITV2="braintreepaypalcreditv2",e.GOOGLEPAY_ADYENV2="googlepayadyenv2",e.GOOGLEPAY_ADYENV3="googlepayadyenv3",e.GOOGLEPAY_AUTHORIZENET="googlepayauthorizenet",e.GOOGLEPAY_BRAINTREE="googlepaybraintree",e.GOOGLEPAY_CHECKOUTCOM="googlepaycheckoutcom",e.GOOGLEPAY_CYBERSOURCEV2="googlepaycybersourcev2",e.GOOGLEPAY_ORBITAL="googlepayorbital",e.GOOGLEPAY_STRIPE="googlepaystripe",e.GOOGLEPAY_STRIPEUPE="googlepaystripeupe",e.MASTERPASS="masterpass",e.PAYPALEXPRESS="paypalexpress",e.PAYPALCOMMERCE="paypalcommerce"}(E||(E={}));const O=E;var N;!function(e){e[e.MissingBillingAddress=0]="MissingBillingAddress",e[e.MissingCart=1]="MissingCart",e[e.MissingCheckout=2]="MissingCheckout",e[e.MissingConsignments=3]="MissingConsignments",e[e.MissingCustomer=4]="MissingCustomer",e[e.MissingCheckoutConfig=5]="MissingCheckoutConfig",e[e.MissingOrder=6]="MissingOrder",e[e.MissingOrderConfig=7]="MissingOrderConfig",e[e.MissingOrderId=8]="MissingOrderId",e[e.MissingPayment=9]="MissingPayment",e[e.MissingPaymentId=10]="MissingPaymentId",e[e.MissingPaymentInstrument=11]="MissingPaymentInstrument",e[e.MissingPaymentMethod=12]="MissingPaymentMethod",e[e.MissingPaymentRedirectUrl=13]="MissingPaymentRedirectUrl",e[e.MissingPaymentStatus=14]="MissingPaymentStatus",e[e.MissingPaymentToken=15]="MissingPaymentToken",e[e.MissingShippingAddress=16]="MissingShippingAddress"}(N||(N={}));const M=function(e){function t(t){var n=e.call(this,function(e){switch(e){case N.MissingBillingAddress:return"Unable to proceed because billing address data is unavailable.";case N.MissingCart:return"Unable to proceed because cart data is unavailable.";case N.MissingConsignments:return"Unable to proceed because consignments data is unavailable.";case N.MissingCheckout:return"Unable to proceed because checkout data is unavailable.";case N.MissingCustomer:return"Unable to proceed because customer data is unavailable.";case N.MissingCheckoutConfig:case N.MissingOrderConfig:return"Unable to proceed because configuration data is unavailable.";case N.MissingOrder:return"Unable to proceed because order data is unavailable.";case N.MissingOrderId:return"Unable to proceed because order ID is unavailable or not generated yet.";case N.MissingPayment:return"Unable to proceed because payment data is unavailable.";case N.MissingPaymentToken:return"Unable to proceed because the token required to submit a payment is missing.";case N.MissingPaymentMethod:return"Unable to proceed because payment method data is unavailable or not properly configured.";case N.MissingShippingAddress:return"Unable to proceed because shipping address data is unavailable.";default:return"Unable to proceed because the required data is unavailable."}}(t))||this;return n.subtype=t,n.name="MissingDataError",n.type="missing_data",n}return(0,n.__extends)(t,e),t}(r);function S(e,t){var n=e.firstName||t.firstName||"",r=e.lastName||t.lastName||"";return{addresses:(e.addresses||[]).map((function(e){return C(e)})),customerId:e.id,isGuest:e.isGuest,storeCredit:e.storeCredit,email:e.email||t.email||"",firstName:n,lastName:r,name:e.fullName||[n,r].join(" "),customerGroupName:e.customerGroup&&e.customerGroup.name}}const V=function(){function e(){}return e.prototype.format=function(e){var t=e.split(new RegExp("\\s*/\\s*")),n=t[0],r=void 0===n?"":n,i=t[1],a=void 0===i?"":i,o=r.slice(0,2),s=4===a.length?a.slice(-2):a?a.slice(0,2):r.slice(2);return e.length<2?r:e.length>3&&!s?o:o+" / "+s},e.prototype.toObject=function(e){var t=e.split(new RegExp("\\s*/\\s*")),n=t[0],r=void 0===n?"":n,i=t[1],a=void 0===i?"":i;return/^\d+$/.test(r)&&/^\d+$/.test(a)?{month:1===r.length?"0"+r:r.slice(0,2),year:2===a.length?"20"+a:a.slice(0,4)}:{month:"",year:""}},e}(),D=require("card-validator"),x=function(){function e(){}return e.prototype.format=function(e){var t=(0,D.number)(e).card;if(!t)return e;var n=(0,v.max)((0,D.creditCardType)(e).map((function(e){return(0,v.max)(e.lengths)}))),r=this.unformat(e).slice(0,n);return t.gaps.filter((function(e){return r.length>e})).reduce((function(e,t,n){return[e.slice(0,t+n),e.slice(t+n)].join(" ")}),r)},e.prototype.unformat=function(e){return(0,D.number)(e).card?e.replace(new RegExp(" ","g"),""):e},e}();function L(e,t){void 0===t&&(t={});var n,r,i=e.currency.decimalPlaces,a=new b(i);return{id:e.orderId,items:P(e.lineItems,e.currency.decimalPlaces,"productId"),orderId:e.orderId,currency:e.currency.code,customerCanBeCreated:e.customerCanBeCreated,payment:U(e.payments,t.payment),subtotal:{amount:e.baseAmount,integerAmount:a.toInteger(e.baseAmount)},coupon:{discountedAmount:(0,v.reduce)(e.coupons,(function(e,t){return e+t.discountedAmount}),0),coupons:e.coupons.map(A)},discount:{amount:e.discountAmount,integerAmount:a.toInteger(e.discountAmount)},token:t.orderToken,callbackUrl:t.callbackUrl,discountNotifications:[],giftCertificate:(n=e.payments,r=(0,v.filter)(n,{providerId:"giftcertificate"}),{totalDiscountedAmount:(0,v.reduce)(r,(function(e,t){return t.amount+e}),0),appliedGiftCertificates:(0,v.keyBy)(r.map((function(e){return{code:e.detail.code,discountedAmount:e.amount,remainingBalance:e.detail.remaining,giftCertificate:{balance:e.amount+e.detail.remaining,code:e.detail.code,purchaseDate:""}}})),"code")}),socialData:F(e),status:e.status,hasDigitalItems:e.hasDigitalItems,isDownloadable:e.isDownloadable,isComplete:e.isComplete,shipping:{amount:e.shippingCostTotal,integerAmount:a.toInteger(e.shippingCostTotal),amountBeforeDiscount:e.shippingCostBeforeDiscount,integerAmountBeforeDiscount:a.toInteger(e.shippingCostBeforeDiscount)},storeCredit:{amount:k(e.payments)},taxes:e.taxes,taxTotal:{amount:e.taxTotal,integerAmount:a.toInteger(e.taxTotal)},handling:{amount:e.handlingCostTotal,integerAmount:a.toInteger(e.handlingCostTotal)},grandTotal:{amount:e.orderAmount,integerAmount:e.orderAmountAsInteger}}}function k(e){var t=(0,v.find)(e,{providerId:"storecredit"});return t?t.amount:0}function U(e,t){void 0===t&&(t={});var n,r=(0,v.find)(e,R);return r?{id:r.providerId,status:(n=r.detail.step,"PAYMENT_STATUS_"+n),helpText:r.detail.instructions,returnUrl:t.returnUrl}:{}}function R(e){return"giftcertificate"!==e.providerId&&"storecredit"!==e.providerId}function F(e){var t={};return(0,n.__spreadArrays)(e.lineItems.physicalItems,e.lineItems.digitalItems).forEach((function(e){var n;t[e.id]=(n=e,["fb","tw","gp"].reduce((function(e,t){var r=n.socialMedia&&(0,v.find)(n.socialMedia,(function(e){return e.code===t}));return r?(e[t]={name:n.name,description:n.name,image:n.imageUrl,url:r.link,shareText:r.text,sharingLink:r.link,channelName:r.channel,channelCode:r.code},e):e}),{}))})),t}function B(e,t){return{description:e.description,module:e.type,price:e.cost,id:e.id,selected:t,isRecommended:e.isRecommended,imageUrl:e.imageUrl,transitTime:e.transitTime}}const q=function(){function e(){this._cardExpiryFormatter=new V,this._cardNumberFormatter=new x}return e.prototype.transform=function(e,t){var r,i=t.billingAddress.getBillingAddress(),a=t.checkout.getCheckout(),o=t.customer.getCustomer(),s=t.order.getOrder(),u=t.paymentMethods.getPaymentMethod(e.methodId,e.gatewayId),c=t.shippingAddress.getShippingAddress(),d=t.consignments.getConsignments(),p=t.consignments.getShippingOption(),l=t.config.getStoreConfig(),m=t.config.getContextConfig(),h=t.instruments.getInstrumentsMeta(),g=t.paymentMethods.getPaymentMethodsMeta(),f=t.order.getOrderMeta(),_=o&&i&&S(o,i),y=h&&e.paymentData&&(r=e.paymentData,Boolean(r.instrumentId)||function(e){var t=e.formattedPayload;return!!t&&("string"==typeof t.bigpay_token||Boolean(t.bigpay_token&&t.bigpay_token.token))}(e.paymentData))?t.payment.getPaymentToken()+", "+h.vaultAccessToken:t.payment.getPaymentToken();if(!y)throw new M(N.MissingPaymentToken);return{additionalAction:e.additionalAction,authToken:y,customer:_,billingAddress:i&&C(i),shippingAddress:c&&C(c,d),shippingOption:p&&B(p,!0),cart:a&&w(a),order:s&&L(s,f),orderMeta:f,payment:e.paymentData,paymentMethod:u&&this._transformPaymentMethod(u),quoteMeta:{request:(0,n.__assign)((0,n.__assign)({},g),{geoCountryCode:m&&m.geoCountryCode})},source:"bigcommerce-checkout-js-sdk",store:(0,v.pick)(l&&l.storeProfile,["storeHash","storeId","storeLanguage","storeName"])}},e.prototype.transformWithHostedFormData=function(e,t,r){var i=t.additionalAction,a=t.authToken,o=t.checkout,s=t.config,u=t.order,c=t.orderMeta,d=t.payment,p=void 0===d?{}:d,l=t.paymentMethod,m=t.paymentMethodMeta,h=o&&o.consignments[0],g=h&&h.shippingAddress,f=h&&h.selectedShippingOption;return{additionalAction:i,authToken:a,paymentMethod:l&&this._transformPaymentMethod(l),customer:u&&u.billingAddress&&o&&S(o.customer,u.billingAddress),billingAddress:u&&u.billingAddress&&C(u.billingAddress),shippingAddress:g&&o&&C(g,o.consignments),shippingOption:f&&B(f,!0),cart:o&&w(o),order:u&&L(u,c),orderMeta:c,payment:this._transformHostedInputValues(e,p,r),quoteMeta:{request:(0,n.__assign)((0,n.__assign)({},m),{geoCountryCode:s&&s.context.geoCountryCode})},source:"bigcommerce-checkout-js-sdk",store:s&&(0,v.pick)(s.storeConfig.storeProfile,["storeHash","storeId","storeLanguage","storeName"])}},e.prototype._transformPaymentMethod=function(e){return"multi-option"!==e.method||e.gateway?e.initializationData&&e.initializationData.gateway?(0,n.__assign)((0,n.__assign)({},e),{id:e.initializationData.gateway}):e.id===O.BRAINTREE_VENMO?(0,n.__assign)((0,n.__assign)({},e),{id:O.BRAINTREE_PAYPAL}):e:(0,n.__assign)((0,n.__assign)({},e),{gateway:e.id})},e.prototype._transformHostedInputValues=function(e,t,r){return"instrumentId"in t?(0,n.__assign)((0,n.__assign)({},t),{ccCvv:e.cardCodeVerification,ccNumber:e.cardNumberVerification&&this._cardNumberFormatter.unformat(e.cardNumberVerification),hostedFormNonce:r}):(0,n.__assign)((0,n.__assign)({},t),{ccCvv:e.cardCode,ccExpiry:this._cardExpiryFormatter.toObject(e.cardExpiry||""),ccName:e.cardName||"",ccNumber:this._cardNumberFormatter.unformat(e.cardNumber||""),hostedFormNonce:r})},e}();var H;!function(e){e.CardCode="cardCode",e.CardCodeVerification="cardCodeVerification",e.CardExpiry="cardExpiry",e.CardName="cardName",e.CardNumber="cardNumber",e.CardNumberVerification="cardNumberVerification"}(H||(H={}));const G=H;function j(e){switch(e){case G.CardCode:return"cc-csc";case G.CardExpiry:return"cc-exp";case G.CardName:return"cc-name";case G.CardNumber:return"cc-number";default:return""}}const Y=function(){function e(e,t,n){var r=this;this._form=e,this._fieldTypes=t,this._inputAggregator=n,this._handleChange=function(e){var t=e.target;if(!t)throw new Error("Unable to get a reference to the target of the change event.");var n=r._inputAggregator.getInputs().find((function(e){return r._getAutocompleteElementId(e.getType())===t.id}));n&&n.setValue(t.value)},this._inputs=this._fieldTypes.map((function(e){return r._createInput(e)}))}return e.prototype.attach=function(){var e=this;this._inputs.forEach((function(t){return e._form.appendChild(t)}))},e.prototype.detach=function(){this._inputs.forEach((function(e){e.parentElement&&e.parentElement.removeChild(e)}))},e.prototype._createInput=function(e){var t=document.createElement("input");return t.autocomplete=j(e),t.id=this._getAutocompleteElementId(e),t.tabIndex=-1,t.style.position="absolute",t.style.opacity="0",t.style.zIndex="-1",t.addEventListener("change",this._handleChange),t},e.prototype._getAutocompleteElementId=function(e){return"autocomplete-"+(0,v.kebabCase)(e)},e}();var z,W;!function(e){e.AttachRequested="HOSTED_FIELD:ATTACH_REQUESTED",e.SubmitRequested="HOSTED_FIELD:SUBMITTED_REQUESTED",e.ValidateRequested="HOSTED_FIELD:VALIDATE_REQUESTED"}(z||(z={})),function(e){e.AttachSucceeded="HOSTED_INPUT:ATTACH_SUCCEEDED",e.AttachFailed="HOSTED_INPUT:ATTACH_FAILED",e.BinChanged="HOSTED_INPUT:BIN_CHANGED",e.Blurred="HOSTED_INPUT:BLURRED",e.Changed="HOSTED_INPUT:CHANGED",e.CardTypeChanged="HOSTED_INPUT:CARD_TYPE_CHANGED",e.Entered="HOSTED_INPUT:ENTERED",e.Focused="HOSTED_INPUT:FOCUSED",e.SubmitSucceeded="HOSTED_INPUT:SUBMIT_SUCCEEDED",e.SubmitFailed="HOSTED_INPUT:SUBMIT_FAILED",e.Validated="HOSTED_INPUT:VALIDATED"}(W||(W={}));const Q=function(){function e(e,t,n,r,i,a,o,s,u,c,d,p){var l=this;this._type=e,this._form=t,this._placeholder=n,this._accessibilityLabel=r,this._autocomplete=i,this._styles=a,this._fontUrls=o,this._eventListener=s,this._eventPoster=u,this._inputAggregator=c,this._inputValidator=d,this._paymentHandler=p,this._isTouched=!1,this._handleInput=function(e){var t=e.target;l._processChange(t.value)},this._handleBlur=function(){l._applyStyles(l._styles.default),l._validateForm(),l._eventPoster.post({type:W.Blurred,payload:{fieldType:l._type}})},this._handleFocus=function(){l._applyStyles(l._styles.focus),l._eventPoster.post({type:W.Focused,payload:{fieldType:l._type}})},this._handleValidate=function(){l._validateForm()},this._handleSubmit=function(e){e.preventDefault(),l._eventPoster.post({type:W.Entered,payload:{fieldType:l._type}})},this._forceFocusToInput=function(){document.activeElement===document.body&&(navigator.userAgent.toLowerCase().indexOf("safari")>-1?""===l._input.value&&(l._input.setAttribute("value"," "),l._input.setSelectionRange(0,1),l._input.setAttribute("value","")):l._input.focus())},this._input=document.createElement("input"),this._input.addEventListener("input",this._handleInput),this._input.addEventListener("blur",this._handleBlur),this._input.addEventListener("focus",this._handleFocus),this._eventListener.addListener(z.ValidateRequested,this._handleValidate),this._eventListener.addListener(z.SubmitRequested,this._paymentHandler.handle),this._configureInput()}return e.prototype.getType=function(){return this._type},e.prototype.getValue=function(){return this._input.value},e.prototype.setValue=function(e){this._processChange(e)},e.prototype.isTouched=function(){return this._isTouched},e.prototype.attach=function(){this._form.appendChild(this._input),this._form.addEventListener("submit",this._handleSubmit),this._loadFonts(),this._eventPoster.setTarget(window.parent),this._eventListener.listen(),window.addEventListener("focus",this._forceFocusToInput),window.hostedInput=this,this._eventPoster.post({type:W.AttachSucceeded})},e.prototype.detach=function(){this._input.parentElement&&this._input.parentElement.removeChild(this._input),this._form.removeEventListener("submit",this._handleSubmit),this._unloadFonts(),window.removeEventListener("focus",this._forceFocusToInput),this._eventListener.stopListen()},e.prototype._formatValue=function(e){this._input.value=e},e.prototype._notifyChange=function(e){this._eventPoster.post({type:W.Changed,payload:{fieldType:this._type}})},e.prototype._configureInput=function(){this._input.style.backgroundColor="transparent",this._input.style.border="0",this._input.style.display="block",this._input.style.height="100%",this._input.style.margin="0",this._input.style.outline="none",this._input.style.padding="0",this._input.style.width="100%",this._input.id=(0,v.kebabCase)(this._type),this._input.placeholder=this._placeholder,this._input.autocomplete=this._autocomplete,this._input.setAttribute("aria-label",this._accessibilityLabel),this._applyStyles(this._styles.default)},e.prototype._applyStyles=function(e){var t=this;void 0===e&&(e={});var n={color:e.color,fontFamily:e.fontFamily,fontSize:e.fontSize,fontWeight:e.fontWeight};Object.keys(n).forEach((function(e){n[e]&&(t._input.style[e]=n[e]||"")}))},e.prototype._loadFonts=function(){this._fontLinks||(this._fontLinks=this._fontUrls.filter((function(e){return"fonts.googleapis.com"===a(e).hostname})).filter((function(e){return!document.querySelector("link[href='"+e+"'][rel='stylesheet']")})).map((function(e){var t=document.createElement("link");return t.rel="stylesheet",t.href=e,document.head.appendChild(t),t})))},e.prototype._unloadFonts=function(){this._fontLinks&&(this._fontLinks.forEach((function(e){e.parentElement&&e.parentElement.removeChild(e)})),this._fontLinks=void 0)},e.prototype._validateForm=function(){return(0,n.__awaiter)(this,void 0,void 0,(function(){var e,t;return(0,n.__generator)(this,(function(n){switch(n.label){case 0:return e=this._inputAggregator.getInputValues(),[4,this._inputValidator.validate(e)];case 1:return(t=n.sent()).isValid?this._applyStyles(this._styles.default):this._applyStyles(this._styles.error),this._eventPoster.post({type:W.Validated,payload:t}),[2]}}))}))},e.prototype._processChange=function(e){e!==this._previousValue&&(this._isTouched=!0,this._formatValue(e),this._validateForm(),this._notifyChange(e),this._previousValue=e)},e}(),Z=function(e){function t(t,n,r,i,a,o,s,u,c,d,p,l){var m=e.call(this,G.CardExpiry,t,n,r,i,a,o,s,u,c,d,p)||this;return m._formatter=l,m}return(0,n.__extends)(t,e),t.prototype._formatValue=function(e){this._input.value=this._formatter.format(e)},t}(Q),$=function(e){function t(t,n,r,i,a,o,s,u,c,d,p,l,m,h){var g=e.call(this,t,n,r,i,a,o,s,u,c,d,p,l)||this;return g._autocompleteFieldset=m,g._formatter=h,g}return(0,n.__extends)(t,e),t.prototype.attach=function(){e.prototype.attach.call(this),this._autocompleteFieldset.attach()},t.prototype._notifyChange=function(e){var t=(0,D.number)(e).card,n=this._previousValue&&(0,D.number)(this._previousValue).card;(0,v.get)(n,"type")!==(0,v.get)(t,"type")&&this._eventPoster.post({type:W.CardTypeChanged,payload:{cardType:t?t.type:void 0}});var r=this._formatter.unformat(e),i=this._previousValue?this._formatter.unformat(this._previousValue):"",a=r.length>=6&&(0,D.number)(r).isPotentiallyValid?r.substr(0,6):"";a!==(i.length>=6?i.substr(0,6):"")&&this._eventPoster.post({type:W.BinChanged,payload:{bin:a}})},t.prototype._formatValue=function(e){var t=this._input.selectionEnd,n=this._formatter.format(e);t===e.length&&e.length<n.length?this._input.setSelectionRange(n.length,n.length):this._input.setSelectionRange(t||0,t||0),this._input.value=n},t}(Q),K=function(){function e(e){this._parentWindow=e}return e.prototype.getInputs=function(e){return Array.prototype.slice.call(this._parentWindow.frames).reduce((function(t,r){try{var i=r.hostedInput;return!i||e&&!e(i)?t:(0,n.__spreadArrays)(t,[i])}catch(e){if(e instanceof DOMException)return t;if(e instanceof Error&&"Permission denied"===e.message)return t;throw e}}),[])},e.prototype.getInputValues=function(e){return this.getInputs(e).reduce((function(e,t){var r;return(0,n.__assign)((0,n.__assign)({},e),((r={})[t.getType()]=t.getValue(),r))}),{})},e}(),X=function(e){function t(t){var r=e.call(this,(0,n.__spreadArrays)(["Unable to proceed due to invalid user input values"],(0,v.flatMap)((0,v.values)(t),(function(e){return(0,v.map)(e,(function(e){return e.message}))}))).join(". "))||this;return r.errors=t,r.name="InvalidHostedFormValueError",r.type="invalid_hosted_form_value",r}return(0,n.__extends)(t,e),t}(r),J=function(){function e(e,t,r,i,a,o){var s=this;this._inputAggregator=e,this._inputValidator=t,this._inputStorage=r,this._eventPoster=i,this._paymentRequestSender=a,this._paymentRequestTransformer=o,this.handle=function(e){var t=e.payload.data;return(0,n.__awaiter)(s,void 0,void 0,(function(){var e,r,i,a,o,s;return(0,n.__generator)(this,(function(n){switch(n.label){case 0:return e=this._inputAggregator.getInputValues(),[4,this._inputValidator.validate(e)];case 1:if(r=n.sent(),this._eventPoster.post({type:W.Validated,payload:r}),!r.isValid)return i=new X(r.errors),[2,this._eventPoster.post({type:W.SubmitFailed,payload:{error:{code:(0,v.snakeCase)(i.name),message:i.message}}})];n.label=2;case 2:return n.trys.push([2,4,,5]),[4,this._paymentRequestSender.submitPayment(this._paymentRequestTransformer.transformWithHostedFormData(e,t,this._inputStorage.getNonce()||""))];case 3:return a=n.sent(),this._eventPoster.post({type:W.SubmitSucceeded,payload:{paymentType:null===(s=t.paymentMethod)||void 0===s?void 0:s.type,response:a}}),[3,5];case 4:return o=n.sent(),this._eventPoster.post({type:W.SubmitFailed,payload:this._isPaymentErrorResponse(o)?{error:o.body.errors[0],response:o}:{error:{code:(0,v.snakeCase)(o.name),message:o.message}}}),[3,5];case 5:return[2]}}))}))}}return e.prototype._isPaymentErrorResponse=function(e){var t=(e||{}).body,n=(void 0===t?{}:t).errors,r=void 0===n?[]:n;return"string"==typeof(r[0]&&r[0].code)&&"string"==typeof(r[0]&&r[0].message)},e}(),ee=require("yup"),te=function(){function e(e){this._cardInstrument=e,this._configureCardValidator()}return e.prototype.validate=function(e){return(0,n.__awaiter)(this,void 0,void 0,(function(){var t,r,i,a;return(0,n.__generator)(this,(function(o){switch(o.label){case 0:t=Object.keys(e),r={},i={errors:{},isValid:!0},(0,v.includes)(t,G.CardCode)&&(r.cardCode=this._getCardCodeSchema(),i.errors.cardCode=[]),(0,v.includes)(t,G.CardCodeVerification)&&(r.cardCodeVerification=this._getCardCodeVerificationSchema(),i.errors.cardCodeVerification=[]),(0,v.includes)(t,G.CardExpiry)&&(r.cardExpiry=this._getCardExpirySchema(),i.errors.cardExpiry=[]),(0,v.includes)(t,G.CardName)&&(r.cardName=this._getCardNameSchema(),i.errors.cardName=[]),(0,v.includes)(t,G.CardNumber)&&(r.cardNumber=this._getCardNumberSchema(),i.errors.cardNumber=[]),(0,v.includes)(t,G.CardNumberVerification)&&(r.cardNumberVerification=this._getCardNumberVerificationSchema(),i.errors.cardNumberVerification=[]),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,(0,ee.object)(r).validate(e,{abortEarly:!1})];case 2:return o.sent(),[2,i];case 3:if("ValidationError"!==(a=o.sent()).name)throw a;return[2,{errors:Object.keys(i.errors).reduce((function(e,t){var r;return(0,n.__assign)((0,n.__assign)({},e),((r={})[t]=a.inner.filter((function(e){return e.path===t})).map((function(e){return{fieldType:e.path,message:e.errors.join(" "),type:e.type}})),r))}),{}),isValid:!1}];case 4:return[2]}}))}))},e.prototype._configureCardValidator=function(){var e=D.creditCardType.getTypeInfo("discover"),t=D.creditCardType.getTypeInfo("visa");D.creditCardType.updateCard("visa",{lengths:(0,n.__spreadArrays)([13],t.lengths||[])}),D.creditCardType.updateCard("discover",{patterns:(0,n.__spreadArrays)(e.patterns||[],[[810,817]])}),D.creditCardType.addCard({niceType:"Mada",type:"mada",patterns:[400861,401757,407197,407395,409201,410685,412565,417633,419593,422817,422818,422819,428331,428671,428672,428673,431361,432328,434107,439954,440533,440647,440795,445564,446393,446404,446672,455036,455708,457865,458456,462220,468540,468541,468542,468543,483010,483011,483012,484783,486094,486095,486096,489317,489318,489319,493428,504300,506968,508160,513213,520058,521076,524130,524514,529415,529741,530060,530906,531095,531196,532013,535825,535989,536023,537767,539931,543085,543357,549760,554180,557606,558848,585265,588845,588846,588847,588848,588849,588850,588851,588982,588983,589005,589206,604906,605141,636120,968201,968202,968203,968204,968205,968206,968207,968208,968209,968210,968211],gaps:[4,8,12],lengths:[16,18,19],code:{name:"CVV",size:3}})},e.prototype._getCardCodeSchema=function(){return(0,ee.string)().required("CVV is required").test({message:"CVV must be valid",name:"invalid_card_code",test:function(e){var t=(0,D.number)(this.parent.cardNumber||"").card;return(0,D.cvv)(e,t&&t.code?t.code.size:void 0).isValid}})},e.prototype._getCardCodeVerificationSchema=function(){var e=this;return(0,ee.string)().required("CVV is required").test({message:"CVV must be valid",name:"invalid_card_code",test:function(t){void 0===t&&(t="");var n=e._cardInstrument&&e._mapFromInstrumentCardType(e._cardInstrument.brand),r=n&&D.creditCardType.getTypeInfo(n);return(0,D.cvv)(t,r&&r.code?r.code.size:void 0).isValid}})},e.prototype._getCardExpirySchema=function(){return(0,ee.string)().required("Expiration date is required").test({message:"Expiration date must be a valid future date in MM / YY format",name:"invalid_card_expiry",test:function(e){return(0,D.expirationDate)(e).isValid}})},e.prototype._getCardNameSchema=function(){return(0,ee.string)().max(200).required("Full name is required")},e.prototype._getCardNumberSchema=function(){return(0,ee.string)().required("Credit card number is required").test({message:"Credit card number must be valid",name:"invalid_card_number",test:function(e){return(0,D.number)(e).isValid}})},e.prototype._getCardNumberVerificationSchema=function(){var e=this;return(0,ee.string)().required("Credit card number is required").test({message:"Credit card number must be valid",name:"invalid_card_number",test:function(e){return void 0===e&&(e=""),(0,D.number)(e).isValid}}).test({message:"The card number entered does not match the card stored in your account",name:"mismatched_card_number",test:function(t){return void 0===t&&(t=""),!!e._cardInstrument&&t.slice(-e._cardInstrument.last4.length)===e._cardInstrument.last4}})},e.prototype._mapFromInstrumentCardType=function(e){switch(e){case"amex":case"american_express":return"american-express";case"diners":return"diners-club";default:return e}},e}(),ne=function(){function e(e){this._parentOrigin=e}return e.prototype.create=function(e,t,n,r,i,a,o){void 0===n&&(n={}),void 0===r&&(r=[]),void 0===i&&(i=""),void 0===a&&(a=function(e){switch(e){case G.CardCode:case G.CardCodeVerification:return"CVC";case G.CardExpiry:return"Expiration";case G.CardName:return"Name on card";case G.CardNumber:case G.CardNumberVerification:return"Credit card number"}}(t));var s=j(t);return t===G.CardNumber?this._createNumberInput(t,e,n,r,i,a,s):t===G.CardNumberVerification?this._createNumberInput(t,e,n,r,i,a,s,o):t===G.CardExpiry?this._createExpiryInput(e,n,r,i,a,s):t===G.CardCodeVerification?this._createInput(t,e,n,r,i,a,s,o):this._createInput(t,e,n,r,i,a,s)},e.prototype.normalizeParentOrigin=function(e){this._parentOrigin!==e&&(this._parentOrigin!==o(a(e)).origin&&e!==o(a(this._parentOrigin)).origin||(this._parentOrigin=e))},e.prototype.getParentOrigin=function(){return this._parentOrigin},e.prototype._createExpiryInput=function(e,t,n,r,i,a){return void 0===i&&(i=""),void 0===a&&(a=""),new Z(e,r,i,a,t,n,new d(this._parentOrigin),new _(this._parentOrigin,window.parent),new K(window.parent),new te,this._createPaymentHandler(),new V)},e.prototype._createNumberInput=function(e,t,n,r,i,a,o,s){return void 0===a&&(a=""),void 0===o&&(o=""),new $(e,t,i,a,o,n,r,new d(this._parentOrigin),new _(this._parentOrigin,window.parent),new K(window.parent),new te(s),this._createPaymentHandler(s),new Y(t,[G.CardCode,G.CardExpiry,G.CardName],new K(window.parent)),new x)},e.prototype._createInput=function(e,t,n,r,i,a,o,s){return void 0===a&&(a=""),void 0===o&&(o=""),new Q(e,t,i,a,o,n,r,new d(this._parentOrigin),new _(this._parentOrigin,window.parent),new K(window.parent),new te(s),this._createPaymentHandler(s))},e.prototype._createPaymentHandler=function(e){return new J(new K(window.parent),new te(e),m(),new _(this._parentOrigin,window.parent),new y((0,h.createClient)()),new q)},e}(),re=function(e){function t(t){var n=e.call(this,t||"Unable to proceed due to invalid configuration provided for the hosted payment form.")||this;return n.name="InvalidHostedFormConfigError",n.type="invalid_hosted_form_config",n}return(0,n.__extends)(t,e),t}(r),ie=function(){function e(e,t,n){this._factory=e,this._storage=t,this._eventListener=n}return e.prototype.initialize=function(e,t){var n=this;t&&this._storage.setNonce(t);var r=this._createFormContainer(e);return this._resetPageStyles(e),this._eventListener.listen(),(0,g.fromEvent)(this._eventListener,z.AttachRequested).pipe((0,f.map)((function(e){var t=e.payload,i=t.accessibilityLabel,a=t.cardInstrument,o=t.fontUrls,s=t.placeholder,u=t.styles,c=t.origin,d=t.type;c&&n._factory.normalizeParentOrigin(c);var p=n._factory.create(r,d,u,o,s,i,a);return p.attach(),p})),(0,f.take)(1)).toPromise()},e.prototype._resetPageStyles=function(e){[document.querySelector("html"),document.querySelector("body"),document.getElementById(e)].forEach((function(e){e&&(e.style.height="100%",e.style.width="100%",e.style.overflow="hidden",e.style.padding="0",e.style.margin="0")}))},e.prototype._createFormContainer=function(e){var t=document.getElementById(e);if(!t)throw new re("Unable to proceed because the provided container ID is not valid.");var n=document.createElement("form"),r=document.createElement("button");return n.noValidate=!0,n.style.height="100%",n.style.width="100%",r.style.display="none",t.appendChild(n),n.appendChild(r),n},e}();function ae(e){var t=e.containerId,n=e.nonce,r=e.parentOrigin;return new ie(new ne(r),m(),new d(r)).initialize(t,n)}var oe=new _("*",window.parent);function se(e){oe.post({type:W.AttachFailed,payload:{error:e}})}module.exports=t})();
//# sourceMappingURL=hosted-form.js.map