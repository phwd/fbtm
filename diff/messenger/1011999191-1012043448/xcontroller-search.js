// new lines (count = 2):

__d("XBusinessUnifiedLoginPageController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/loginpage/",{option:{type:"Enum",enumType:1},next:{type:"String"},app:{type:"FBID"},login_options:{type:"EnumVector",enumType:{member:1}},cma_account_switch:{type:"Bool",defaultValue:!1},display:{type:"Enum",enumType:1},from_ig_login_upsell_sso:{type:"Bool",defaultValue:!1},is_work_accounts:{type:"Bool",defaultValue:!1},is_workplatform:{type:"Bool",defaultValue:!1},is_targeting_other_login_options:{type:"Bool",defaultValue:!1},from_shop_manager:{type:"Bool",defaultValue:!1},error_event:{type:"String"},delete_account:{type:"String"},invite_business_name:{type:"String"},from_ig_multi_admin_invite:{type:"Bool",defaultValue:!1},dnd_option:{type:"Enum",enumType:1},is_from_invitation_flow:{type:"Bool",defaultValue:!1},ig_user_name:{type:"String"},is_null_state:{type:"Bool",defaultValue:!1},request_id:{type:"String"}})}),null);
__d("XGroupCallController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/groupcall/{?call_context}/",{av:{type:"FBID"},call_context:{type:"String",required:!0},call_id:{type:"Int"},call_trigger:{type:"String"},users_to_ring:{type:"FBIDSet",defaultValue:[]},has_video:{type:"Bool",defaultValue:!0},initialize_video:{type:"Bool",defaultValue:!0},server_info_data:{type:"String"},nonce:{type:"String"},locale:{type:"String"},funnel_session_id:{type:"String"},auto_join:{type:"Bool",defaultValue:!1},referrer_context:{type:"Enum",enumType:1},use_joining_context:{type:"Bool",defaultValue:!1},peer_id:{type:"FBID"},group_thread_id:{type:"FBID"},thread_type:{type:"Enum",enumType:0},has_seen_interstitial:{type:"Bool",defaultValue:!1},use_dapp:{type:"Bool",defaultValue:!1},is_e2ee_mandated:{type:"Bool",defaultValue:!1},use_www:{type:"Bool",defaultValue:!1}})}),null);

// old lines (count = 4)

__d("XBusinessUnifiedLoginPageController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/loginpage/",{option:{type:"Enum",enumType:1},next:{type:"String"},app:{type:"FBID"},login_options:{type:"EnumVector",enumType:{member:1}},cma_account_switch:{type:"Bool",defaultValue:!1},display:{type:"Enum",enumType:1},from_ig_login_upsell_sso:{type:"Bool",defaultValue:!1},is_work_accounts:{type:"Bool",defaultValue:!1},is_workplatform:{type:"Bool",defaultValue:!1},is_targeting_other_login_options:{type:"Bool",defaultValue:!1},from_shop_manager:{type:"Bool",defaultValue:!1},error_event:{type:"String"},delete_account:{type:"String"},invite_business_name:{type:"String"},from_ig_multi_admin_invite:{type:"Bool",defaultValue:!1},dnd_option:{type:"Enum",enumType:1},is_from_invitation_flow:{type:"Bool",defaultValue:!1},ig_user_name:{type:"String"},is_null_state:{type:"Bool",defaultValue:!1}})}),null);
__d("XGroupCallController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/groupcall/{?call_context}/",{av:{type:"FBID"},call_context:{type:"String",required:!0},call_id:{type:"Int"},call_trigger:{type:"String"},users_to_ring:{type:"FBIDSet",defaultValue:[]},has_video:{type:"Bool",defaultValue:!0},initialize_video:{type:"Bool",defaultValue:!0},server_info_data:{type:"String"},nonce:{type:"String"},locale:{type:"String"},funnel_session_id:{type:"String"},auto_join:{type:"Bool",defaultValue:!1},referrer_context:{type:"Enum",enumType:1},use_joining_context:{type:"Bool",defaultValue:!1},peer_id:{type:"FBID"},group_thread_id:{type:"FBID"},thread_type:{type:"Enum",enumType:0},has_seen_interstitial:{type:"Bool",defaultValue:!1},use_dapp:{type:"Bool",defaultValue:!1},is_e2ee_mandated:{type:"Bool",defaultValue:!1}})}),null);
__d("FBXCommercePartnerGraphQLController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/shopify_app/graphql/",{doc:{type:"String"},client_doc_id:{type:"String"},doc_id:{type:"String"},variables:{type:"String"},encrypted_variables:{type:"String"},fb_api_client_context:{type:"String"},friendly_name:{type:"String"},usecase_id:{type:"Int"},logger_properties:{type:"StringToStringDict"},enable_canonical_naming:{type:"Bool",defaultValue:!1},enable_canonical_variable_overrides:{type:"Bool",defaultValue:!1},enable_canonical_naming_ambiguous_type_prefixing:{type:"Bool",defaultValue:!1},platform_version:{type:"Enum",enumType:1},access_token:{type:"String"},session_token:{type:"String"},locale:{type:"String"},internal_viewer_tool_params:{type:"String"}})}),null);
__d("XShopifyAppAuthenticateEmbeddedFrameController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/shopify_app/authenticate/",{error:{type:"String"},error_reason:{type:"String"},state:{type:"String"}})}),null);