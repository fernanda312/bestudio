
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.Cm4XMvKf.js","/cdn/shopifycloud/checkout-web/assets/c1/app.CgSrszIp.js","/cdn/shopifycloud/checkout-web/assets/c1/2c1ab0fe.OiGkFFd2.js","/cdn/shopifycloud/checkout-web/assets/c1/6a2fc6d6.g_In9-XZ.js","/cdn/shopifycloud/checkout-web/assets/c1/5587f402.BSOuPxdB.js","/cdn/shopifycloud/checkout-web/assets/c1/cf29e63b.DmhB2wit.js","/cdn/shopifycloud/checkout-web/assets/c1/bfe75f31.BOZOTbVT.js","/cdn/shopifycloud/checkout-web/assets/c1/6f2620f5.DWQxIivK.js","/cdn/shopifycloud/checkout-web/assets/c1/2255f8fa.Cpw5LwO5.js","/cdn/shopifycloud/checkout-web/assets/c1/204243fa.8gh9CsRe.js","/cdn/shopifycloud/checkout-web/assets/c1/5c5817f3.BjGyrbty.js","/cdn/shopifycloud/checkout-web/assets/c1/8f46f026.Bu0OBlja.js","/cdn/shopifycloud/checkout-web/assets/c1/f05935e5.BG7WUTvo.js","/cdn/shopifycloud/checkout-web/assets/c1/32e8c018.Cevpqk8S.js","/cdn/shopifycloud/checkout-web/assets/c1/7336bdaf.CMQyqvCf.js","/cdn/shopifycloud/checkout-web/assets/c1/8b3289d0.Zu5HCUeF.js","/cdn/shopifycloud/checkout-web/assets/c1/cf6ddc11.CeiqwruG.js","/cdn/shopifycloud/checkout-web/assets/c1/b8733b27.DS_tQaW7.js","/cdn/shopifycloud/checkout-web/assets/c1/e39bc11c.31mv-MPQ.js","/cdn/shopifycloud/checkout-web/assets/c1/08a3b809.Bhj34JE6.js","/cdn/shopifycloud/checkout-web/assets/c1/164ad2e3.DgbBLGGq.js","/cdn/shopifycloud/checkout-web/assets/c1/69fae6d4.B0cVlpvy.js","/cdn/shopifycloud/checkout-web/assets/c1/e12db40c.HthnIkR6.js","/cdn/shopifycloud/checkout-web/assets/c1/60a453ce.uAK0S36H.js","/cdn/shopifycloud/checkout-web/assets/c1/fb3b4968.B33l1A_z.js","/cdn/shopifycloud/checkout-web/assets/c1/f8706cb6.B4rpyrPm.js","/cdn/shopifycloud/checkout-web/assets/c1/0e9ee714.BcEIxP6J.js","/cdn/shopifycloud/checkout-web/assets/c1/39921a74.DWj0SC17.js","/cdn/shopifycloud/checkout-web/assets/c1/7a8217fd.BUN7ELBR.js","/cdn/shopifycloud/checkout-web/assets/c1/8599b02a.Cw_50wLK.js","/cdn/shopifycloud/checkout-web/assets/c1/dffdfb34.8Q6NOkzA.js","/cdn/shopifycloud/checkout-web/assets/c1/a422df8c.By0QsQn8.js","/cdn/shopifycloud/checkout-web/assets/c1/efa0389a.tUm48-bV.js","/cdn/shopifycloud/checkout-web/assets/c1/c8760fd8.DMbymrCn.js","/cdn/shopifycloud/checkout-web/assets/c1/53bbdad9.DNe-Izey.js","/cdn/shopifycloud/checkout-web/assets/c1/1f5e7811.CzCiblmV.js","/cdn/shopifycloud/checkout-web/assets/c1/1a6c2867.DIvU9A1-.js","/cdn/shopifycloud/checkout-web/assets/c1/2fdb3dd3.nPHuNaYU.js","/cdn/shopifycloud/checkout-web/assets/c1/22345fd4.LAKyRHRw.js","/cdn/shopifycloud/checkout-web/assets/c1/0e67bd3b.51_Qc-k7.js","/cdn/shopifycloud/checkout-web/assets/c1/a9fa9fda.CYwHhNqv.js","/cdn/shopifycloud/checkout-web/assets/c1/ca3e798e.BPg6Ntq-.js","/cdn/shopifycloud/checkout-web/assets/c1/f7861534.DEBPIVnF.js","/cdn/shopifycloud/checkout-web/assets/c1/47b970b2.CwQ_4TuQ.js","/cdn/shopifycloud/checkout-web/assets/c1/064f6ac1.Bxe2DpoU.js","/cdn/shopifycloud/checkout-web/assets/c1/17425706.Cv8fo_ZX.js","/cdn/shopifycloud/checkout-web/assets/c1/71ae3d5c.CjBGAmlL.js","/cdn/shopifycloud/checkout-web/assets/c1/cb5cf153.YBwcs0_I.js","/cdn/shopifycloud/checkout-web/assets/c1/06ef5503.Cf-9123J.js","/cdn/shopifycloud/checkout-web/assets/c1/acc42fa8.BwlQeoOI.js","/cdn/shopifycloud/checkout-web/assets/c1/cccd6056.D4qQKDRF.js","/cdn/shopifycloud/checkout-web/assets/c1/0b8657b8.B8DV6LpY.js","/cdn/shopifycloud/checkout-web/assets/c1/79974aab._ie860hz.js","/cdn/shopifycloud/checkout-web/assets/c1/89e2d30a.AypalaXB.js","/cdn/shopifycloud/checkout-web/assets/c1/ed9f2238.B3YHrfyy.js","/cdn/shopifycloud/checkout-web/assets/c1/6fb6f9d8.DCW8-m2W.js","/cdn/shopifycloud/checkout-web/assets/c1/1444e6bd.d6Zxxv6f.js","/cdn/shopifycloud/checkout-web/assets/c1/55098bf1.DQcpmi18.js","/cdn/shopifycloud/checkout-web/assets/c1/f49d4216.zIhXH0So.js","/cdn/shopifycloud/checkout-web/assets/c1/7b0c98ea.Bfm5rZ8t.js","/cdn/shopifycloud/checkout-web/assets/c1/d22d2b80.DiXtDPO0.js","/cdn/shopifycloud/checkout-web/assets/c1/f58f39d8.D0_snre0.js","/cdn/shopifycloud/checkout-web/assets/c1/e03065ab.CkOjh_C9.js","/cdn/shopifycloud/checkout-web/assets/c1/c09515bf.VRNn7OVX.js","/cdn/shopifycloud/checkout-web/assets/c1/6bfea526.C1itcwB9.js","/cdn/shopifycloud/checkout-web/assets/c1/ac5a19ff.DI0FU5Jj.js","/cdn/shopifycloud/checkout-web/assets/c1/598fef4e.BK74a5i8.js","/cdn/shopifycloud/checkout-web/assets/c1/e77f7fe0.D0Ypch2W.js","/cdn/shopifycloud/checkout-web/assets/c1/cc6ff67d.ChZ0jOpL.js","/cdn/shopifycloud/checkout-web/assets/c1/bf513f9c.BCNRDUG9.js","/cdn/shopifycloud/checkout-web/assets/c1/dfca5da5.BITtA-jk.js","/cdn/shopifycloud/checkout-web/assets/c1/dae24aab.BaNNtz8X.js","/cdn/shopifycloud/checkout-web/assets/c1/ddf59287.CgrCCfzo.js","/cdn/shopifycloud/checkout-web/assets/c1/01973ac7.BAIj6-ly.js","/cdn/shopifycloud/checkout-web/assets/c1/58314944.B_EG8sUw.js","/cdn/shopifycloud/checkout-web/assets/c1/945a08d6.CH6wLQx_.js","/cdn/shopifycloud/checkout-web/assets/c1/a25deb9a.dlL5giEG.js","/cdn/shopifycloud/checkout-web/assets/c1/2b89a178.Mqeyc-mv.js","/cdn/shopifycloud/checkout-web/assets/c1/9068a4ed.CK47NErI.js","/cdn/shopifycloud/checkout-web/assets/c1/b684bff6.DwhOak-_.js","/cdn/shopifycloud/checkout-web/assets/c1/f1968089.CR1elvF_.js","/cdn/shopifycloud/checkout-web/assets/c1/910cd6e2.CsPT-C7b.js","/cdn/shopifycloud/checkout-web/assets/c1/347b440c.B2vhNVqY.js","/cdn/shopifycloud/checkout-web/assets/c1/5ade1ef3.Cn-CXD7f.js","/cdn/shopifycloud/checkout-web/assets/c1/181d38d3.ugA0Ginl.js","/cdn/shopifycloud/checkout-web/assets/c1/5a347040.OhF0dNlU.js","/cdn/shopifycloud/checkout-web/assets/c1/792bb671.CC0ips34.js","/cdn/shopifycloud/checkout-web/assets/c1/9ca7d819.0IedRpME.js","/cdn/shopifycloud/checkout-web/assets/c1/f51e663e.BEqDvAhP.js","/cdn/shopifycloud/checkout-web/assets/c1/21cc90a2.DHzOO82q.js","/cdn/shopifycloud/checkout-web/assets/c1/64de7b49.BJ5mi2io.js","/cdn/shopifycloud/checkout-web/assets/c1/ca0c3e72.CSteMHHe.js","/cdn/shopifycloud/checkout-web/assets/c1/8e79be58.x6kdMcmu.js","/cdn/shopifycloud/checkout-web/assets/c1/90e26f5f.CbvMJ6N0.js","/cdn/shopifycloud/checkout-web/assets/c1/31cc568e.95lmLO5k.js","/cdn/shopifycloud/checkout-web/assets/c1/65f3d4da.Bb3QiqCm.js","/cdn/shopifycloud/checkout-web/assets/c1/d5d34b3b.DlnavBvy.js","/cdn/shopifycloud/checkout-web/assets/c1/ca5e9c49.CSET3nIN.js","/cdn/shopifycloud/checkout-web/assets/c1/f3e117aa.-unoVTLk.js","/cdn/shopifycloud/checkout-web/assets/c1/7aefefff.CXbh05Hv.js","/cdn/shopifycloud/checkout-web/assets/c1/73a9b0a0.64HH60_V.js","/cdn/shopifycloud/checkout-web/assets/c1/86720dbb.BRdAQNvb.js","/cdn/shopifycloud/checkout-web/assets/c1/0724c71d.TfeFmFC2.js","/cdn/shopifycloud/checkout-web/assets/c1/7114e006.HyOpA9Ez.js","/cdn/shopifycloud/checkout-web/assets/c1/9babe369.Ces18Qvi.js","/cdn/shopifycloud/checkout-web/assets/c1/434e3b0a.oup8Ur0H.js","/cdn/shopifycloud/checkout-web/assets/c1/e0989459.DjaSiCRZ.js","/cdn/shopifycloud/checkout-web/assets/c1/cdfd59e6.u-3WdE6M.js","/cdn/shopifycloud/checkout-web/assets/c1/d2e6a587.BAtdKVwW.js","/cdn/shopifycloud/checkout-web/assets/c1/ca3c8263.Cg4k6HPa.js","/cdn/shopifycloud/checkout-web/assets/c1/b3389d5c.Bc3x-EZw.js","/cdn/shopifycloud/checkout-web/assets/c1/083cdde5.BSpNkTZM.js","/cdn/shopifycloud/checkout-web/assets/c1/fe885b80.CO72a_ET.js","/cdn/shopifycloud/checkout-web/assets/c1/f78726c8.DC8CU7B2.js","/cdn/shopifycloud/checkout-web/assets/c1/d93ca466.Bze0H8OB.js","/cdn/shopifycloud/checkout-web/assets/c1/d4ea2faa.CUi74Irf.js","/cdn/shopifycloud/checkout-web/assets/c1/051149c8.lHD9iIAq.js","/cdn/shopifycloud/checkout-web/assets/c1/d7065744.Buv3tXlT.js","/cdn/shopifycloud/checkout-web/assets/c1/7ee73f43.CV2lFLvv.js","/cdn/shopifycloud/checkout-web/assets/c1/0c0ad074.e4k-rq5r.js","/cdn/shopifycloud/checkout-web/assets/c1/8fe56fc9.Bo3yGct5.js","/cdn/shopifycloud/checkout-web/assets/c1/2210eadb.DF0gIp_2.js","/cdn/shopifycloud/checkout-web/assets/c1/8a00b682.BJtp7_QD.js","/cdn/shopifycloud/checkout-web/assets/c1/87bfafec.DEOwltUQ.js","/cdn/shopifycloud/checkout-web/assets/c1/e477f96c.B7RRII2U.js","/cdn/shopifycloud/checkout-web/assets/c1/c6b02d73.Blg9TXt-.js","/cdn/shopifycloud/checkout-web/assets/c1/71b60e0a.Bdvld-6t.js","/cdn/shopifycloud/checkout-web/assets/c1/24773686.D6B_SXV6.js","/cdn/shopifycloud/checkout-web/assets/c1/7048f38b.D22dF_sM.js","/cdn/shopifycloud/checkout-web/assets/c1/c3c7c048.BAHp4VID.js","/cdn/shopifycloud/checkout-web/assets/c1/7aa3b627.DJy9ZpJi.js","/cdn/shopifycloud/checkout-web/assets/c1/dada7e07.CV_Ph5CP.js","/cdn/shopifycloud/checkout-web/assets/c1/c10167e6.BAavmj6_.js","/cdn/shopifycloud/checkout-web/assets/c1/17e57de1.DXr8tdnq.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.DBH01810.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/is-address-empty.DDArxpAV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/hydrate.exmvYeij.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.C_uC3EPz.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StickyPayButton.D-gNjNDa.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.BS8yVgoP.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayProgressIntercepts.CIy8uDiZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VatNumberValidationField.DZtuG_UK.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EmptyState.BEvzDDvy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.BMdzfW_y.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayLogo.87JMHPUK.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ChangeCompanyLocationLink.B1YSPUDc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Popover.Bi1nHaU-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/index.Du9dByaI.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useApplePayButtonStatus.ct4xfivv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/TransitionHeight.CuRoM9zv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Tipping.BcTJoNaV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.gzvCNwz_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.DT05kVlY.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/findSelectedDeliveryMethod.xO_7ctnq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.BAjucZ-8.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BrandedPromise.B0RErzdh.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethods.DU0m5rdF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.vTcdVGq4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BelowTheFoldContent.DRJckcGa.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RememberMeSection.JBO5WNhc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentMethodProgressionHost.kQR0txJ7.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RedirectionNotice.B8v_QGNW.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MissingFields.BbxB_6wt.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.CyQZvZOO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useOnePageFormSubmit.1WzRSowg.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/checkout-pay-button-exit.KhTiKgPS.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/observe-fit-scale.DpLOWYa8.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.btyKOfco.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Payment.DrWvAMMF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentOptionSelector.s-Kd_X2E.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/roboto/roboto_n4.2019d890f07b1852f56ce63ba45b2db45d852cba.woff2?h1=YWduZXN0b3RoLmNvbQ&hmac=969f60586003acd9ad1e9f7d64069f7d57c3443d02db20771479a4e19bb1f3ce","https://fonts.shopifycdn.com/roboto/roboto_n7.f38007a10afbbde8976c4056bfe890710d51dec2.woff2?h1=YWduZXN0b3RoLmNvbQ&hmac=9145101f59f7363caef6b8d6a33ffd2d120014da8e717fca1fe5202b6d717dc2","https://fonts.shopifycdn.com/playfair_display/playfairdisplay_n4.9980f3e16959dc89137cc1369bfc3ae98af1deb9.woff2?h1=YWduZXN0b3RoLmNvbQ&hmac=c4e9520f4030e4d6832cfb4d3fd6873e858f7691f5d90ff305854bcbd5cfc20c","https://fonts.shopifycdn.com/playfair_display/playfairdisplay_n7.592b3435e0fff3f50b26d410c73ae7ec893f6910.woff2?h1=YWduZXN0b3RoLmNvbQ&hmac=94f33b0595003652808a765d9722ac590a00b2ce6eb314e628240f5dd47ce975"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/1102/1028/5906/files/97af9a_GMAIL_LOGO_x320.png?v=1789811706"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  