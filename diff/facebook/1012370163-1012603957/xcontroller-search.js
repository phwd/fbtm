// new lines (count = 11):

__d("XBusinessUnifiedLoginPageController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/loginpage/",{option:{type:"Enum",enumType:1},next:{type:"String"},app:{type:"FBID"},login_options:{type:"EnumVector",enumType:{member:1}},cma_account_switch:{type:"Bool",defaultValue:!1},display:{type:"Enum",enumType:1},from_ig_login_upsell_sso:{type:"Bool",defaultValue:!1},is_work_accounts:{type:"Bool",defaultValue:!1},is_workplatform:{type:"Bool",defaultValue:!1},is_targeting_other_login_options:{type:"Bool",defaultValue:!1},from_shop_manager:{type:"Bool",defaultValue:!1},error_event:{type:"String"},delete_account:{type:"String"},invite_business_name:{type:"String"},from_ig_multi_admin_invite:{type:"Bool",defaultValue:!1},dnd_option:{type:"Enum",enumType:1},is_from_invitation_flow:{type:"Bool",defaultValue:!1},ig_user_name:{type:"String"},is_null_state:{type:"Bool",defaultValue:!1},is_ig_switching_account:{type:"Bool",defaultValue:!1},request_id:{type:"String"},config_ref:{type:"String"}})}),null);
__d("XBusinessUnifiedLoginPageController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/loginpage/",{option:{type:"Enum",enumType:1},next:{type:"String"},app:{type:"FBID"},login_options:{type:"EnumVector",enumType:{member:1}},cma_account_switch:{type:"Bool",defaultValue:!1},display:{type:"Enum",enumType:1},from_ig_login_upsell_sso:{type:"Bool",defaultValue:!1},is_work_accounts:{type:"Bool",defaultValue:!1},is_workplatform:{type:"Bool",defaultValue:!1},is_targeting_other_login_options:{type:"Bool",defaultValue:!1},from_shop_manager:{type:"Bool",defaultValue:!1},error_event:{type:"String"},delete_account:{type:"String"},invite_business_name:{type:"String"},from_ig_multi_admin_invite:{type:"Bool",defaultValue:!1},dnd_option:{type:"Enum",enumType:1},is_from_invitation_flow:{type:"Bool",defaultValue:!1},ig_user_name:{type:"String"},is_null_state:{type:"Bool",defaultValue:!1},is_ig_switching_account:{type:"Bool",defaultValue:!1},request_id:{type:"String"},config_ref:{type:"String"}})}),null);
__d("XAdsPEController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/adsmanager/",{path:{type:"String"},_fb_noscript:{type:"Bool",defaultValue:!1},act:{type:"Int"},adgroup:{type:"FBID"},attribution_windows:{type:"String"},audiences:{type:"String"},breakdown_regrouping:{type:"Bool",defaultValue:!1},business_id:{type:"FBID"},campaign:{type:"FBID"},campaign_group:{type:"FBID"},campaign_group_spec:{type:"String"},column_preset:{type:"String"},columns:{type:"String"},comparison_time_range:{type:"String"},creative_mockup_id:{type:"FBID"},destination:{type:"String"},global_scope_id:{type:"FBID"},page:{type:"String"},targeting_spec:{type:"String"},target_currency:{type:"String"},tool:{type:"String"},uitest:{type:"String"},date:{type:"String"},filter_set:{type:"String"},formatting_set:{type:"String"},limit:{type:"Int"},focus_area:{type:"String"},is_reload_from_account_change:{type:"Bool",defaultValue:!1},is_split_test:{type:"Bool",defaultValue:!1},insights_metrics:{type:"String"},insights_section:{type:"String"},root_level:{type:"Enum",enumType:1},selected_ad_ids:{type:"String"},selected_adset_ids:{type:"String"},selected_campaign_ids:{type:"String"},cadence:{type:"String"},image_url:{type:"String"},selected_page_id:{type:"FBID"},sort:{type:"String"},nav_entry_point:{type:"Enum",enumType:1},nav_source:{type:"Enum",enumType:1},objective:{type:"String"},package_config_id:{type:"FBID"},prefilled_adgroup_id:{type:"FBID"},selected_proposal_id:{type:"FBID"},errors_quick_filter:{type:"String"},optimization_goal:{type:"String"},launch_quick_creation:{type:"Bool",defaultValue:!1},view_type:{type:"Enum",enumType:1},launch_help_tray:{type:"Enum",enumType:1},help_tray_cms_id:{type:"FBID"},scroll_to_section:{type:"Enum",enumType:1},ad_script_id:{type:"FBID"},qpl_console_logging:{type:"Int"},notif_id:{type:"Int"},notif_t:{type:"String"},redirect_context:{type:"String"},event_source:{type:"String"},selected_report_id:{type:"String"},breakdowns:{type:"String"},metrics:{type:"String"},locked_dimensions:{type:"Int"},sort_spec:{type:"String"},time_range:{type:"String"},placement:{type:"String"},preview_sharing_key:{type:"String"},strategy_id:{type:"FBID"},page_id:{type:"FBID"},post_id:{type:"FBID"},crm_assignment_id:{type:"FBID"},ads_proposal_id:{type:"FBID"},creative_set_id:{type:"FBID"},package_deep_link_source:{type:"String"},recommendation_type:{type:"String"},recommendation_source:{type:"String"},adset_ids_with_warning:{type:"String"},shops_ads_brand_id:{type:"String"},show_view_history:{type:"Bool",defaultValue:!1},marketing_message_asset_id:{type:"FBID"},ab_test_action:{type:"String"},ab_test_lightweight_type:{type:"String"},schedule_call_job_id:{type:"String"},auto_apply_modal_type:{type:"String"},auto_apply_select_guidance:{type:"String"}})}),null);
__d("XCometLWIPostCreationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ad_center/create/boostpost/",{boost_id:{type:"FBID"},entry_point:{type:"String",required:!0},entry_point_details:{type:"String"},page_id:{type:"FBID",required:!0},show_switched_toast:{type:"Bool",defaultValue:!1},show_coupon_interstitial_dialog:{type:"Bool",defaultValue:!1},modal:{type:"String"},so:{type:"String"},target_id:{type:"FBID",required:!0},remove_taggings:{type:"Bool",defaultValue:!1}})}),null);
__d("XBusinessSSOMigrationLoginController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/user/sso/migration/login/",{business_user_id:{type:"FBID",required:!0},csrf_state:{type:"String",required:!0},enterprise_id:{type:"FBID",required:!0},is_user_opted_in_for_multi_step_migration:{type:"Bool",defaultValue:!1},migration_flow_session_id:{type:"String"},is_work_accounts:{type:"Bool",defaultValue:!1},request_id:{type:"String"}})}),null);
__d("XBusinessSettingsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/settings/{?tab}/{?asset_id}/",{business_id:{type:"FBID"},global_scope_id:{type:"FBID"},tab:{type:"String"},custom_tab:{type:"String"},custom_tab_data:{type:"String"},asset_id:{type:"Int"},subtab:{type:"String"},enable_redirection:{type:"Bool",defaultValue:!0},bap_submission_id:{type:"FBID"}})}),null);
__d("XAdLibraryV2SearchController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/library/async/search_ads/",{active_status:{type:"Enum",enumType:1},ad_type:{type:"Enum",enumType:1},full_text_search_field:{type:"Enum",enumType:1},pagination_mode:{type:"Enum",enumType:0},group_by_modes:{type:"EnumVector",enumType:{member:0}},bylines:{type:"StringVector"},countries:{type:"EnumVector",enumType:{member:1}},regions:{type:"StringVector"},page_ids:{type:"FBIDVector"},publisher_platforms:{type:"EnumVector",enumType:{member:1}},potential_reach:{type:"TypeAssert"},start_date:{type:"TypeAssert"},media_type:{type:"Enum",enumType:1},content_languages:{type:"StringVector"},count:{type:"Int"},forward_cursor:{type:"String"},backward_cursor:{type:"String"},excluded_ids:{type:"FBIDVector"},q:{type:"String"},source:{type:"Enum",enumType:1},view_all_page_id:{type:"FBID"},image_id:{type:"FBID"},location:{type:"TypeAssert"},session_id:{type:"String"},sort_data:{type:"TypeAssert"},collation_token:{type:"String"},search_type:{type:"Enum",enumType:1},verify:{type:"String"}})}),null);
__d("XPartnersOxsightsInsightsV2Controller",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/actionable_insights/{?core_app}/{?section}/{?path}/",{carrier_id:{type:"Int"},portal:{type:"Enum",enumType:1},ref:{type:"Enum",enumType:1},partner_id:{type:"Int"},latch_enable:{type:"String"},latch_disable:{type:"String"},core_app:{type:"Enum",enumType:1},section:{type:"Enum",enumType:1},from_email:{type:"Enum",enumType:1},deep_link_json:{type:"String"},airef:{type:"String"},tour_id:{type:"String"},deployment_filters:{type:"String"},modal_type:{type:"String"},auth_code:{type:"String"},open_notifications:{type:"String"},path:{type:"String"}})}),null);
__d("FRLXAPIAuthSettingsVYIController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/api/vyi/",{dyi_field_type:{type:"String"},page_number:{type:"Int"}})}),null);
__d("FRLXAPIAuthSettingsVYIController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/api/vyi/",{dyi_field_type:{type:"String"},page_number:{type:"Int"}})}),null);
__d("XPartnersOxsightsInsightsV2Controller",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/actionable_insights/{?core_app}/{?section}/{?path}/",{carrier_id:{type:"Int"},portal:{type:"Enum",enumType:1},ref:{type:"Enum",enumType:1},partner_id:{type:"Int"},latch_enable:{type:"String"},latch_disable:{type:"String"},core_app:{type:"Enum",enumType:1},section:{type:"Enum",enumType:1},from_email:{type:"Enum",enumType:1},deep_link_json:{type:"String"},airef:{type:"String"},tour_id:{type:"String"},deployment_filters:{type:"String"},modal_type:{type:"String"},auth_code:{type:"String"},open_notifications:{type:"String"},path:{type:"String"}})}),null);

// old lines (count = 29)

__d("XBusinessUnifiedLoginPageController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/loginpage/",{option:{type:"Enum",enumType:1},next:{type:"String"},app:{type:"FBID"},login_options:{type:"EnumVector",enumType:{member:1}},cma_account_switch:{type:"Bool",defaultValue:!1},display:{type:"Enum",enumType:1},from_ig_login_upsell_sso:{type:"Bool",defaultValue:!1},is_work_accounts:{type:"Bool",defaultValue:!1},is_workplatform:{type:"Bool",defaultValue:!1},is_targeting_other_login_options:{type:"Bool",defaultValue:!1},from_shop_manager:{type:"Bool",defaultValue:!1},error_event:{type:"String"},delete_account:{type:"String"},invite_business_name:{type:"String"},from_ig_multi_admin_invite:{type:"Bool",defaultValue:!1},dnd_option:{type:"Enum",enumType:1},is_from_invitation_flow:{type:"Bool",defaultValue:!1},ig_user_name:{type:"String"},is_null_state:{type:"Bool",defaultValue:!1},is_ig_switching_account:{type:"Bool",defaultValue:!1},request_id:{type:"String"}})}),null);
__d("XAdsPEController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/adsmanager/",{path:{type:"String"},_fb_noscript:{type:"Bool",defaultValue:!1},act:{type:"Int"},adgroup:{type:"FBID"},attribution_windows:{type:"String"},audiences:{type:"String"},breakdown_regrouping:{type:"Bool",defaultValue:!1},business_id:{type:"FBID"},campaign:{type:"FBID"},campaign_group:{type:"FBID"},campaign_group_spec:{type:"String"},column_preset:{type:"String"},columns:{type:"String"},comparison_time_range:{type:"String"},creative_mockup_id:{type:"FBID"},destination:{type:"String"},global_scope_id:{type:"FBID"},page:{type:"String"},targeting_spec:{type:"String"},target_currency:{type:"String"},tool:{type:"String"},uitest:{type:"String"},date:{type:"String"},filter_set:{type:"String"},formatting_set:{type:"String"},limit:{type:"Int"},focus_area:{type:"String"},is_reload_from_account_change:{type:"Bool",defaultValue:!1},is_split_test:{type:"Bool",defaultValue:!1},insights_metrics:{type:"String"},insights_section:{type:"String"},root_level:{type:"Enum",enumType:1},selected_ad_ids:{type:"String"},selected_adset_ids:{type:"String"},selected_campaign_ids:{type:"String"},cadence:{type:"String"},image_url:{type:"String"},selected_page_id:{type:"FBID"},sort:{type:"String"},nav_entry_point:{type:"Enum",enumType:1},nav_source:{type:"Enum",enumType:1},objective:{type:"String"},package_config_id:{type:"FBID"},prefilled_adgroup_id:{type:"FBID"},selected_proposal_id:{type:"FBID"},errors_quick_filter:{type:"String"},optimization_goal:{type:"String"},launch_quick_creation:{type:"Bool",defaultValue:!1},view_type:{type:"Enum",enumType:1},launch_help_tray:{type:"Enum",enumType:1},help_tray_cms_id:{type:"FBID"},scroll_to_section:{type:"Enum",enumType:1},ad_script_id:{type:"FBID"},qpl_console_logging:{type:"Int"},notif_id:{type:"Int"},notif_t:{type:"String"},redirect_context:{type:"String"},event_source:{type:"String"},selected_report_id:{type:"String"},breakdowns:{type:"String"},metrics:{type:"String"},locked_dimensions:{type:"Int"},sort_spec:{type:"String"},time_range:{type:"String"},placement:{type:"String"},preview_sharing_key:{type:"String"},strategy_id:{type:"FBID"},page_id:{type:"FBID"},post_id:{type:"FBID"},crm_assignment_id:{type:"FBID"},ads_proposal_id:{type:"FBID"},creative_set_id:{type:"FBID"},package_deep_link_source:{type:"String"},recommendation_type:{type:"String"},recommendation_source:{type:"String"},adset_ids_with_warning:{type:"String"},shops_ads_brand_id:{type:"String"},show_view_history:{type:"Bool",defaultValue:!1},marketing_message_asset_id:{type:"FBID"},ab_test_action:{type:"String"},ab_test_lightweight_type:{type:"String"},schedule_call_job_id:{type:"String"}})}),null);
__d("XBusinessUnifiedLoginPageController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/loginpage/",{option:{type:"Enum",enumType:1},next:{type:"String"},app:{type:"FBID"},login_options:{type:"EnumVector",enumType:{member:1}},cma_account_switch:{type:"Bool",defaultValue:!1},display:{type:"Enum",enumType:1},from_ig_login_upsell_sso:{type:"Bool",defaultValue:!1},is_work_accounts:{type:"Bool",defaultValue:!1},is_workplatform:{type:"Bool",defaultValue:!1},is_targeting_other_login_options:{type:"Bool",defaultValue:!1},from_shop_manager:{type:"Bool",defaultValue:!1},error_event:{type:"String"},delete_account:{type:"String"},invite_business_name:{type:"String"},from_ig_multi_admin_invite:{type:"Bool",defaultValue:!1},dnd_option:{type:"Enum",enumType:1},is_from_invitation_flow:{type:"Bool",defaultValue:!1},ig_user_name:{type:"String"},is_null_state:{type:"Bool",defaultValue:!1},is_ig_switching_account:{type:"Bool",defaultValue:!1},request_id:{type:"String"}})}),null);
__d("XPagesSettingsInstreamAdsBlockListExportCSVController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/admin/people_and_other_pages/block_list/export_csv/",{page_id:{type:"FBID",required:!0},block_list_id:{type:"FBID"}})}),null);
__d("XAdsEventsManagerPageDataSourceLoaderController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/me/custom_conversion_pages/",{business_id:{type:"FBID"}})}),null);
__d("FRLXAPIAuthSettingsVYIController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/api/vyi/",{dyi_field_type:{type:"String"}})}),null);
__d("XCRMContactImportCsvUploadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/crm/csv_import/",{page_id:{type:"FBID",required:!0}})}),null);
__d("XAdsEventsManagerCustomConversionCanAccessStatsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/me/custom_conversions_permission_check/",{business_id:{type:"FBID",required:!0},custom_conversion_id:{type:"FBID",required:!0}})}),null);
__d("XPartnersOxsightsInsightsV2Controller",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/actionable_insights/{?core_app}/{?section}/",{carrier_id:{type:"Int"},portal:{type:"Enum",enumType:1},ref:{type:"Enum",enumType:1},partner_id:{type:"Int"},latch_enable:{type:"String"},latch_disable:{type:"String"},core_app:{type:"Enum",enumType:1},section:{type:"Enum",enumType:1},from_email:{type:"Enum",enumType:1},deep_link_json:{type:"String"},airef:{type:"String"},tour_id:{type:"String"},deployment_filters:{type:"String"},modal_type:{type:"String"},auth_code:{type:"String"},open_notifications:{type:"String"}})}),null);
__d("XAdLibraryV2SearchController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/library/async/search_ads/",{active_status:{type:"Enum",enumType:1},ad_type:{type:"Enum",enumType:1},full_text_search_field:{type:"Enum",enumType:1},pagination_mode:{type:"Enum",enumType:0},group_by_modes:{type:"EnumVector",enumType:{member:0}},bylines:{type:"StringVector"},countries:{type:"EnumVector",enumType:{member:1}},regions:{type:"StringVector"},page_ids:{type:"FBIDVector"},publisher_platforms:{type:"EnumVector",enumType:{member:1}},potential_reach:{type:"TypeAssert"},start_date:{type:"TypeAssert"},media_type:{type:"Enum",enumType:1},content_languages:{type:"StringVector"},count:{type:"Int"},forward_cursor:{type:"String"},backward_cursor:{type:"String"},excluded_ids:{type:"FBIDVector"},q:{type:"String"},source:{type:"Enum",enumType:1},view_all_page_id:{type:"FBID"},image_id:{type:"FBID"},location:{type:"TypeAssert"},session_id:{type:"String"},sort_data:{type:"TypeAssert"},collation_token:{type:"String"},search_type:{type:"Enum",enumType:1}})}),null);
__d("XAdsEventsManagerUpgradePixelToConsolidatedDataSetController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events_manager/dataset/upgrade/",{pixel_id:{type:"FBID",required:!0}})}),null);
__d("XPagesManagerInvoicePhotoUploadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/upload/file/invoice/photo/",{})}),null);
__d("XBloodDonationFacilitySpreadsheetController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/donateblood/bulk_spreadsheet/",{})}),null);
__d("XPartnersOxsightsInsightsV2Controller",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/actionable_insights/{?core_app}/{?section}/",{carrier_id:{type:"Int"},portal:{type:"Enum",enumType:1},ref:{type:"Enum",enumType:1},partner_id:{type:"Int"},latch_enable:{type:"String"},latch_disable:{type:"String"},core_app:{type:"Enum",enumType:1},section:{type:"Enum",enumType:1},from_email:{type:"Enum",enumType:1},deep_link_json:{type:"String"},airef:{type:"String"},tour_id:{type:"String"},deployment_filters:{type:"String"},modal_type:{type:"String"},auth_code:{type:"String"},open_notifications:{type:"String"}})}),null);
__d("XBusinessSettingsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/settings/{?tab}/{?asset_id}/",{business_id:{type:"FBID"},global_scope_id:{type:"FBID"},tab:{type:"String"},custom_tab:{type:"String"},custom_tab_data:{type:"String"},asset_id:{type:"Int"},subtab:{type:"String"},bap_submission_id:{type:"FBID"}})}),null);
__d("XBusinessSSOMigrationLoginController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/business/user/sso/migration/login/",{business_user_id:{type:"FBID",required:!0},csrf_state:{type:"String",required:!0},enterprise_id:{type:"FBID",required:!0},is_user_opted_in_for_multi_step_migration:{type:"Bool",defaultValue:!1},migration_flow_session_id:{type:"String"},is_work_accounts:{type:"Bool",defaultValue:!1}})}),null);
__d("XReactComposerCTAAttachmentBootstrapController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/react_composer/cta/bootstrap/",{composer_id:{type:"String",required:!0},composer_type:{type:"Enum",required:!0,enumType:1},target_id:{type:"Int",required:!0},cta_type:{type:"String",required:!0},attachment_id:{type:"String"},preview_style:{type:"Enum",defaultValue:"full_size_preview",enumType:1}})}),null);
__d("XPageInsightsProductTaggingMetricsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/page/insights/product_tagging/metrics/",{page_post_id:{type:"String",required:!0}})}),null);
__d("XPageOrganicTargetingSettingAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/organictargetingsetting/set/",{})}),null);
__d("XPagesPostPreviewController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/previews/",{location:{type:"Enum",enumType:0},post_id:{type:"Int",required:!0},preview_container_dom_id:{type:"String",required:!0},site:{type:"String",required:!0},use_permalink_story_location:{type:"Bool",defaultValue:!1}})}),null);
__d("XAdsEventsManagerConsolidatedDatasetAutoWebsiteMatchingUpdateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events_manager/consolidation/advanced_matching/update/",{data_source_id:{type:"FBID",required:!0},enable_automatic_matching:{type:"Bool",defaultValue:!1},automatic_matching_fields:{type:"EnumKeyset",defaultValue:[],enumType:null}})}),null);
__d("XAdsEventsManagerConsolidationDatasetFirstPartyCookieStatusUpdateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events_manager/consolidation/first_party_cookie_status/update/",{data_source_id:{type:"FBID",required:!0},selected_first_party_cookie_status:{type:"Enum",required:!0,enumType:1}})}),null);
__d("XAdsEventsManagerSetOffsiteSignalContainerProxyHasDissociateFromAppController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events_manager/dataset/set_has_dissociated_from_app/",{dataset_id:{type:"FBID",required:!0},value:{type:"Bool",defaultValue:!1}})}),null);
__d("XPagesComposerCustomCTAPublishAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/react_composer/cta/publish/",{privacy_mutation_token:{type:"String"},message:{type:"String"},photo_id:{type:"FBID"},video_id:{type:"FBID"},cta_data:{type:"HackType"},referrer:{type:"String"},schedule_time:{type:"Int"},draft:{type:"Bool",defaultValue:!1},start_time:{type:"Int"},boosted_post_config:{type:"String"},raw_data:{type:"HackType"},offer_data:{type:"HackType"},draft_id:{type:"String"}})}),null);
__d("XMessageMarketingDarkPageLoaderController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/marketing_messages/wa_page/",{waba_id:{type:"FBID",required:!0}})}),null);
__d("XCometLWIPostCreationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ad_center/create/boostpost/",{boost_id:{type:"FBID"},entry_point:{type:"String",required:!0},entry_point_details:{type:"String"},page_id:{type:"FBID",required:!0},show_switched_toast:{type:"Bool",defaultValue:!1},show_coupon_interstitial_dialog:{type:"Bool",defaultValue:!1},modal:{type:"String"},so:{type:"String"},target_id:{type:"FBID",required:!0}})}),null);
__d("FRLXAPIAuthSettingsVYIController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/api/vyi/",{dyi_field_type:{type:"String"}})}),null);
__d("XPagesDirectionsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/get_address/",{page_id:{type:"Int",required:!0}})}),null);
__d("XCctaCreateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ccta/create/",{privacy_mutation_token:{type:"String"}})}),null);