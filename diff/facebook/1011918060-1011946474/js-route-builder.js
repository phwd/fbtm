// new lines (count = 6):

__d("CometAuthenticitySecurityCardBody.react",["fbt","ix","BSCStylingUtil","BusinessVerificationUIType","CometAuthenticitySecurityCardDiscardDialog.react","CometAuthenticitySecurityCardNMIDialog.react","CometBVAppealRejectionMutation","CometBVDiscardSubmissionMutation","CometColumn.react","CometColumnItem.react","CometCompatModalUniversalResource","CometLink.react","CometRelay","CometRow.react","CometRowItem.react","FDSSkittleIcon.react","MSCBaseCard.react","PayoutEnvironmentProvider","RelayHooks","TetraButton.react","TetraIcon.react","TetraText.react","cr:3413","cr:6372","fbicon","formatDate","getGraphQLEnumSafe","jsRouteBuilder","react","useCometLazyDialog","useIXTBusinessVerificationWizardTriggerDialog","useIXTCpoWizardTriggerDialog","useNullthrowsViolation"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||(j=d("react")),l=j.useState;function m(a){var e=a.label,f=a.onPress,g=a.size;a=a.type;var h=d("PayoutEnvironmentProvider").usePayoutEnvironment(),i="authenticity-security-card-button";return d("BSCStylingUtil").isGeoDesignSystem(h)&&b("cr:6372")?k.jsx(b("cr:6372"),{"data-testid":void 0,label:e,onClick:f}):k.jsx(c("TetraButton.react"),{label:e,onPress:f,size:g,testid:void 0,type:a})}m.displayName=m.name+" [from "+f.id+"]";function a(a){var e=a.can_discard_submission,f=a.canned_responses,g=a.eligibility_reasons,j=a.fev_wizard_product,n=a.idv_failure_reason,o=a.is_eligible,p=a.nmiDataFragment,q=a.orgID,r=a.orgName,s=a.pageID,t=a.reload,u=a.ui_surface,v=a.verification_completion_time,w=a.verification_status;a=a.verification_submitted_time;var x=l(!1),y=x[0],z=x[1];x=l(!1);var A=x[0],B=x[1];x=l(!1);var C=x[0],D=x[1];x=c("useCometLazyDialog")(c("CometCompatModalUniversalResource"));x=x[0];var E=d("CometRelay").useRelayEnvironment(),F=d("PayoutEnvironmentProvider").usePayoutEnvironment(),G=c("useNullthrowsViolation")(c("getGraphQLEnumSafe")(c("BusinessVerificationUIType"),u));s=c("useIXTCpoWizardTriggerDialog")({country:"US",location:"CPO_WIZARD",org_id:q,page_id:(s=s)!=null?s:"",trigger_event_type:"DIRECT_OPEN_CPO_WIZARD"});var H=s[0];s[1];s=c("useIXTBusinessVerificationWizardTriggerDialog")({business_id:q,business_verification_ui_type:G,fev_wizard_product:j,location:"BUSINESS_VERIFICATION_WIZARD",trigger_event_type:"DIRECT_OPEN_BUSINESS_VERIFICATION_WIZARD"});var I=s[0];s[1];var J;switch(j){case"PAGE_RELATIONSHIP_TRANSPARENCY":J=H;break;case"CLASSIC_BV":case"CLASSIC_WITH_TAX_ID_BV":case"POLITICAL_ADS":J=I;break}if(!o&&w!=="VERIFIED")return null;var K=function(){J({},O)};s=null;u==="blue_badge"?s=h._("__JHASH__t877ApiigS6__JHASH__"):r!=null?s=h._("__JHASH__A0mKUaimjHi__JHASH__",[h._param("org-name",r)]):s=h._("__JHASH__uV9_Fh9XLMn__JHASH__");j=null;H=null;I=null;o=null;var L=null,M=null;switch(w){case"NOT_STARTED":case"EXPIRED":case"REVOKED":I=u==="blue_badge"?k.jsx(c("FDSSkittleIcon.react"),{color:"gray",icon:d("fbicon")._(i("481905"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"secondary",icon:d("fbicon")._(i("481905"),20)});o=h._("__JHASH__e1eTV4aSHFv__JHASH__");g.includes("payouts")?j=h._("__JHASH__jeTjLsVPxah__JHASH__"):g.includes("shops_mandatory")?(j=h._("__JHASH__uBM82lhfMVv__JHASH__"),I=k.jsx(c("TetraIcon.react"),{color:"warning",icon:d("fbicon")._(i("502062"),20)}),o=h._("__JHASH__DfLwwTLSw5I__JHASH__")):j=h._("__JHASH__46oMLaW9l-R__JHASH__",[h._implicitParam("=m1",k.jsx(c("CometLink.react"),{href:"https://www.facebook.com/business/help/1095661473946872",target:"_blank",children:h._("__JHASH__8YAmSAeWFJQ__JHASH__")}))]);H=null;L=k.jsx(m,{label:h._("__JHASH__J7hF9_1m7aT__JHASH__"),onPress:K,size:"large",type:"primary"});M="authenticity-security-card-status-text-not-started";break;case"PENDING_NMI":if(a!=null&&a>0){w=c("formatDate")(a,"M d, Y");j=h._("__JHASH__l5u9xmO1cMg__JHASH__",[h._param("date of verification submission",w)]);H=h._("__JHASH__RhU5i-QWvRw__JHASH__")}else j=h._("__JHASH__RhU5i-QWvRw__JHASH__"),H=null;I=u==="blue_badge"?k.jsx(c("FDSSkittleIcon.react"),{color:"lemon",icon:d("fbicon")._(i("502062"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"warning",icon:d("fbicon")._(i("502062"),20)});o=h._("__JHASH__tvHaezvznDg__JHASH__");L=k.jsx(m,{label:h._("__JHASH__ZiZAz7Cx9ab__JHASH__"),onPress:function(){return z(!0)},size:"large",type:"primary"});M="authenticity-security-card-status-text-pending-nmi";break;case"PENDING_REVIEW":if(a!=null&&a>0){g=c("formatDate")(a,"M d, Y");j=h._("__JHASH__l5u9xmO1cMg__JHASH__",[h._param("date of verification submission",g)]);H=h._("__JHASH__3b_3dB6Eq8C__JHASH__")}else j=h._("__JHASH__3b_3dB6Eq8C__JHASH__");I=u==="blue_badge"?k.jsx(c("FDSSkittleIcon.react"),{color:"blue",icon:d("fbicon")._(i("478795"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"highlight",icon:d("fbicon")._(i("478795"),20)});o=h._("__JHASH__tXInmtK1umK__JHASH__");L=null;M="authenticity-security-card-status-text-pending-review";break;case"PENDING_SUBMISSION":j=h._("__JHASH__knj06w8IRT6__JHASH__");I=u==="blue_badge"?k.jsx(c("FDSSkittleIcon.react"),{color:"blue",icon:d("fbicon")._(i("479177"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"highlight",icon:d("fbicon")._(i("479177"),20)});o=h._("__JHASH__qUZz9ASb1pN__JHASH__");L=k.jsx(m,{label:h._("__JHASH__4CHY_OLoayX__JHASH__"),onPress:K,size:"large",type:"primary"});M="authenticity-security-card-status-text-pending-submission";break;case"REJECTED":j=h._("__JHASH__dPhV-XpE_1P__JHASH__");I=u==="blue_badge"?k.jsx(c("FDSSkittleIcon.react"),{color:"red",icon:d("fbicon")._(i("491581"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"negative",icon:d("fbicon")._(i("491581"),20)});o=h._("__JHASH__KUBrRHZHE1c__JHASH__");L=k.jsx(m,{label:h._("__JHASH__pn1arJrjYxA__JHASH__"),onPress:function(){return c("CometBVAppealRejectionMutation")(E,{creation_surface:G,organization_id:q},K,function(){})},size:"large",type:"secondary"});M="authenticity-security-card-status-text-pending-rejected";break;case"FAILED":I=k.jsx(c("FDSSkittleIcon.react"),{color:"red",icon:d("fbicon")._(i("491581"),20),size:36});o=h._("__JHASH__KUBrRHZHE1c__JHASH__");break;case"VERIFIED":w=c("formatDate")(v,"M d, Y");j=h._("__JHASH__8LvQmCtcja9__JHASH__",[h._param("date of verification",w)]);H=null;I=u==="blue_badge"?k.jsx(c("FDSSkittleIcon.react"),{color:"green",icon:d("fbicon")._(i("498146"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"positive",icon:d("fbicon")._(i("498146"),20)});o=h._("__JHASH__fc_-zjXBp6T__JHASH__");M="authenticity-security-card-status-text-verified";break;default:break}a=e?k.jsx(m,{label:h._("__JHASH__l-pAeNFvzLT__JHASH__"),onPress:function(){return B(!0)},size:"large",type:"secondary"}):null;g=H===null?h._("__JHASH__nzO3C3kQu3-__JHASH__",[h._param("first subtitle",j)]):h._("__JHASH__a7x3urPxARd__JHASH__",[h._param("first subtitle",j),h._param("second subtitle",k.jsx("div",{className:"x1sy10c2",children:H}))]);var N;u==="blue_badge"&&(g=h._("__JHASH__5ufJP0chas3__JHASH__"),N=k.jsx("div",{children:k.jsxs(c("CometRow.react"),{paddingHorizontal:0,paddingVertical:0,verticalAlign:"center",children:[k.jsx(c("CometRowItem.react"),{children:I}),k.jsx(c("CometRowItem.react"),{children:k.jsxs(c("CometColumn.react"),{spacing:8,children:[k.jsx(c("CometColumnItem.react"),{children:k.jsx(c("TetraText.react"),{type:"headlineEmphasized3",children:r})}),k.jsx(c("CometColumnItem.react"),{children:k.jsx(c("TetraText.react"),{type:"meta1",children:o})})]})})]})}));M=k.jsx(c("MSCBaseCard.react"),{content:k.jsxs(c("CometRow.react"),{paddingHorizontal:0,paddingVertical:0,verticalAlign:"center",children:[k.jsx(c("CometRowItem.react"),{children:(v=N)!=null?v:k.jsx("div",{className:"x14vqqas","data-testid":void 0,children:d("BSCStylingUtil").isGeoDesignSystem(F)&&b("cr:3413")?k.jsxs("div",{children:[k.jsx("span",{className:"xmo9yow",children:I}),k.jsx(b("cr:3413"),{children:(w=o)!=null?w:""})]}):k.jsxs(c("TetraText.react"),{type:"bodyLink3",children:[k.jsx("span",{className:"xmo9yow",children:I}),o]})})}),k.jsx(c("CometRowItem.react"),{expanding:!0,children:k.jsx("div",{})}),k.jsx(c("CometRowItem.react"),{children:a}),k.jsx(c("CometRowItem.react"),{children:L})]}),headline:s,headlineSubtitle:g});var O=function(){t(),D(!1)};return k.jsxs("div",{children:[M,y?k.jsx(d("RelayHooks").RelayEnvironmentProvider,{environment:E,children:k.jsx(c("CometAuthenticitySecurityCardNMIDialog.react"),{canned_responses:f,idv_failure_reason:n,nmiDataFragment:p,on_close_handler:function(){return z(!1)},on_resubmit_handler:function(){z(!1),K()}})}):null,A?k.jsx(c("CometAuthenticitySecurityCardDiscardDialog.react"),{on_close_handler:function(){return B(!1)},on_discard_handler:function(){c("CometBVDiscardSubmissionMutation")(E,{business_id:q},function(){B(!1),t()},function(){})},org_name:r}):null,C?x({params:{disableClosingWithMask:!0,rel:"dialog",uri:c("jsRouteBuilder")("/authenticitysecuritycard/wizard/",{}).buildURL({org_id:q,product:"classic_bv",ui_surface:u})}},O):null]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XBusinessHomeV4ControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/home/{?tab}/{?subtab}/",Object.freeze({mio:!1}),void 0);b=a;g["default"]=b}),98);
__d("FBXGenAIImagineMediaControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/media/{image_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("IGXGenAIImagineMediaControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/media/{image_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XBusinessEnterpriseEmailVerificationResendEmailControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/business/enterprise/verification/email/resend/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("FBXHorizonMetaProfileDetailsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/profile/{profile_id_or_alias}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);

// old lines (count = 5)

__d("XCometPayoutHubEarningsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/payout/earnings/{?fe_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("CometAuthenticitySecurityCardBody.react",["fbt","ix","BSCStylingUtil","BusinessVerificationUIType","CometAuthenticitySecurityCardDiscardDialog.react","CometAuthenticitySecurityCardNMIDialog.react","CometBVAppealRejectionMutation","CometBVDiscardSubmissionMutation","CometColumn.react","CometColumnItem.react","CometCompatModalUniversalResource","CometLink.react","CometRelay","CometRow.react","CometRowItem.react","CometSkittleIcon.react","MSCBaseCard.react","PayoutEnvironmentProvider","RelayHooks","TetraButton.react","TetraIcon.react","TetraText.react","cr:3413","cr:6372","fbicon","formatDate","getGraphQLEnumSafe","jsRouteBuilder","react","useCometLazyDialog","useIXTBusinessVerificationWizardTriggerDialog","useIXTCpoWizardTriggerDialog","useNullthrowsViolation"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||(j=d("react")),l=j.useState;function m(a){var e=a.label,f=a.onPress,g=a.size;a=a.type;var h=d("PayoutEnvironmentProvider").usePayoutEnvironment(),i="authenticity-security-card-button";return d("BSCStylingUtil").isGeoDesignSystem(h)&&b("cr:6372")?k.jsx(b("cr:6372"),{"data-testid":void 0,label:e,onClick:f}):k.jsx(c("TetraButton.react"),{label:e,onPress:f,size:g,testid:void 0,type:a})}m.displayName=m.name+" [from "+f.id+"]";function a(a){var e=a.can_discard_submission,f=a.canned_responses,g=a.eligibility_reasons,j=a.fev_wizard_product,n=a.idv_failure_reason,o=a.is_eligible,p=a.nmiDataFragment,q=a.orgID,r=a.orgName,s=a.pageID,t=a.reload,u=a.ui_surface,v=a.verification_completion_time,w=a.verification_status;a=a.verification_submitted_time;var x=l(!1),y=x[0],z=x[1];x=l(!1);var A=x[0],B=x[1];x=l(!1);var C=x[0],D=x[1];x=c("useCometLazyDialog")(c("CometCompatModalUniversalResource"));x=x[0];var E=d("CometRelay").useRelayEnvironment(),F=d("PayoutEnvironmentProvider").usePayoutEnvironment(),G=c("useNullthrowsViolation")(c("getGraphQLEnumSafe")(c("BusinessVerificationUIType"),u));s=c("useIXTCpoWizardTriggerDialog")({country:"US",location:"CPO_WIZARD",org_id:q,page_id:(s=s)!=null?s:"",trigger_event_type:"DIRECT_OPEN_CPO_WIZARD"});var H=s[0];s[1];s=c("useIXTBusinessVerificationWizardTriggerDialog")({business_id:q,business_verification_ui_type:G,fev_wizard_product:j,location:"BUSINESS_VERIFICATION_WIZARD",trigger_event_type:"DIRECT_OPEN_BUSINESS_VERIFICATION_WIZARD"});var I=s[0];s[1];var J;switch(j){case"PAGE_RELATIONSHIP_TRANSPARENCY":J=H;break;case"CLASSIC_BV":case"CLASSIC_WITH_TAX_ID_BV":case"POLITICAL_ADS":J=I;break}if(!o&&w!=="VERIFIED")return null;var K=function(){J({},O)};s=null;u==="blue_badge"?s=h._("__JHASH__t877ApiigS6__JHASH__"):r!=null?s=h._("__JHASH__A0mKUaimjHi__JHASH__",[h._param("org-name",r)]):s=h._("__JHASH__uV9_Fh9XLMn__JHASH__");j=null;H=null;I=null;o=null;var L=null,M=null;switch(w){case"NOT_STARTED":case"EXPIRED":case"REVOKED":I=u==="blue_badge"?k.jsx(c("CometSkittleIcon.react"),{color:"gray",icon:d("fbicon")._(i("481905"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"secondary",icon:d("fbicon")._(i("481905"),20)});o=h._("__JHASH__e1eTV4aSHFv__JHASH__");g.includes("payouts")?j=h._("__JHASH__jeTjLsVPxah__JHASH__"):g.includes("shops_mandatory")?(j=h._("__JHASH__uBM82lhfMVv__JHASH__"),I=k.jsx(c("TetraIcon.react"),{color:"warning",icon:d("fbicon")._(i("502062"),20)}),o=h._("__JHASH__DfLwwTLSw5I__JHASH__")):j=h._("__JHASH__46oMLaW9l-R__JHASH__",[h._implicitParam("=m1",k.jsx(c("CometLink.react"),{href:"https://www.facebook.com/business/help/1095661473946872",target:"_blank",children:h._("__JHASH__8YAmSAeWFJQ__JHASH__")}))]);H=null;L=k.jsx(m,{label:h._("__JHASH__J7hF9_1m7aT__JHASH__"),onPress:K,size:"large",type:"primary"});M="authenticity-security-card-status-text-not-started";break;case"PENDING_NMI":if(a!=null&&a>0){w=c("formatDate")(a,"M d, Y");j=h._("__JHASH__l5u9xmO1cMg__JHASH__",[h._param("date of verification submission",w)]);H=h._("__JHASH__RhU5i-QWvRw__JHASH__")}else j=h._("__JHASH__RhU5i-QWvRw__JHASH__"),H=null;I=u==="blue_badge"?k.jsx(c("CometSkittleIcon.react"),{color:"lemon",icon:d("fbicon")._(i("502062"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"warning",icon:d("fbicon")._(i("502062"),20)});o=h._("__JHASH__tvHaezvznDg__JHASH__");L=k.jsx(m,{label:h._("__JHASH__ZiZAz7Cx9ab__JHASH__"),onPress:function(){return z(!0)},size:"large",type:"primary"});M="authenticity-security-card-status-text-pending-nmi";break;case"PENDING_REVIEW":if(a!=null&&a>0){g=c("formatDate")(a,"M d, Y");j=h._("__JHASH__l5u9xmO1cMg__JHASH__",[h._param("date of verification submission",g)]);H=h._("__JHASH__3b_3dB6Eq8C__JHASH__")}else j=h._("__JHASH__3b_3dB6Eq8C__JHASH__");I=u==="blue_badge"?k.jsx(c("CometSkittleIcon.react"),{color:"blue",icon:d("fbicon")._(i("478795"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"highlight",icon:d("fbicon")._(i("478795"),20)});o=h._("__JHASH__tXInmtK1umK__JHASH__");L=null;M="authenticity-security-card-status-text-pending-review";break;case"PENDING_SUBMISSION":j=h._("__JHASH__knj06w8IRT6__JHASH__");I=u==="blue_badge"?k.jsx(c("CometSkittleIcon.react"),{color:"blue",icon:d("fbicon")._(i("479177"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"highlight",icon:d("fbicon")._(i("479177"),20)});o=h._("__JHASH__qUZz9ASb1pN__JHASH__");L=k.jsx(m,{label:h._("__JHASH__4CHY_OLoayX__JHASH__"),onPress:K,size:"large",type:"primary"});M="authenticity-security-card-status-text-pending-submission";break;case"REJECTED":j=h._("__JHASH__dPhV-XpE_1P__JHASH__");I=u==="blue_badge"?k.jsx(c("CometSkittleIcon.react"),{color:"red",icon:d("fbicon")._(i("491581"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"negative",icon:d("fbicon")._(i("491581"),20)});o=h._("__JHASH__KUBrRHZHE1c__JHASH__");L=k.jsx(m,{label:h._("__JHASH__pn1arJrjYxA__JHASH__"),onPress:function(){return c("CometBVAppealRejectionMutation")(E,{creation_surface:G,organization_id:q},K,function(){})},size:"large",type:"secondary"});M="authenticity-security-card-status-text-pending-rejected";break;case"FAILED":I=k.jsx(c("CometSkittleIcon.react"),{color:"red",icon:d("fbicon")._(i("491581"),20),size:36});o=h._("__JHASH__KUBrRHZHE1c__JHASH__");break;case"VERIFIED":w=c("formatDate")(v,"M d, Y");j=h._("__JHASH__8LvQmCtcja9__JHASH__",[h._param("date of verification",w)]);H=null;I=u==="blue_badge"?k.jsx(c("CometSkittleIcon.react"),{color:"green",icon:d("fbicon")._(i("498146"),20),size:36}):k.jsx(c("TetraIcon.react"),{color:"positive",icon:d("fbicon")._(i("498146"),20)});o=h._("__JHASH__fc_-zjXBp6T__JHASH__");M="authenticity-security-card-status-text-verified";break;default:break}a=e?k.jsx(m,{label:h._("__JHASH__l-pAeNFvzLT__JHASH__"),onPress:function(){return B(!0)},size:"large",type:"secondary"}):null;g=H===null?h._("__JHASH__nzO3C3kQu3-__JHASH__",[h._param("first subtitle",j)]):h._("__JHASH__a7x3urPxARd__JHASH__",[h._param("first subtitle",j),h._param("second subtitle",k.jsx("div",{className:"x1sy10c2",children:H}))]);var N;u==="blue_badge"&&(g=h._("__JHASH__5ufJP0chas3__JHASH__"),N=k.jsx("div",{children:k.jsxs(c("CometRow.react"),{paddingHorizontal:0,paddingVertical:0,verticalAlign:"center",children:[k.jsx(c("CometRowItem.react"),{children:I}),k.jsx(c("CometRowItem.react"),{children:k.jsxs(c("CometColumn.react"),{spacing:8,children:[k.jsx(c("CometColumnItem.react"),{children:k.jsx(c("TetraText.react"),{type:"headlineEmphasized3",children:r})}),k.jsx(c("CometColumnItem.react"),{children:k.jsx(c("TetraText.react"),{type:"meta1",children:o})})]})})]})}));M=k.jsx(c("MSCBaseCard.react"),{content:k.jsxs(c("CometRow.react"),{paddingHorizontal:0,paddingVertical:0,verticalAlign:"center",children:[k.jsx(c("CometRowItem.react"),{children:(v=N)!=null?v:k.jsx("div",{className:"x14vqqas","data-testid":void 0,children:d("BSCStylingUtil").isGeoDesignSystem(F)&&b("cr:3413")?k.jsxs("div",{children:[k.jsx("span",{className:"xmo9yow",children:I}),k.jsx(b("cr:3413"),{children:(w=o)!=null?w:""})]}):k.jsxs(c("TetraText.react"),{type:"bodyLink3",children:[k.jsx("span",{className:"xmo9yow",children:I}),o]})})}),k.jsx(c("CometRowItem.react"),{expanding:!0,children:k.jsx("div",{})}),k.jsx(c("CometRowItem.react"),{children:a}),k.jsx(c("CometRowItem.react"),{children:L})]}),headline:s,headlineSubtitle:g});var O=function(){t(),D(!1)};return k.jsxs("div",{children:[M,y?k.jsx(d("RelayHooks").RelayEnvironmentProvider,{environment:E,children:k.jsx(c("CometAuthenticitySecurityCardNMIDialog.react"),{canned_responses:f,idv_failure_reason:n,nmiDataFragment:p,on_close_handler:function(){return z(!1)},on_resubmit_handler:function(){z(!1),K()}})}):null,A?k.jsx(c("CometAuthenticitySecurityCardDiscardDialog.react"),{on_close_handler:function(){return B(!1)},on_discard_handler:function(){c("CometBVDiscardSubmissionMutation")(E,{business_id:q},function(){B(!1),t()},function(){})},org_name:r}):null,C?x({params:{disableClosingWithMask:!0,rel:"dialog",uri:c("jsRouteBuilder")("/authenticitysecuritycard/wizard/",{}).buildURL({org_id:q,product:"classic_bv",ui_surface:u})}},O):null]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FBXHorizonMetaProfileDetailsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/profile/{profile_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("FBXGenAIImagineMediaControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/media/{media_set_id}/{image_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("IGXGenAIImagineMediaControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/media/{media_set_id}/{image_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);