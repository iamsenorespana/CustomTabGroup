package com.jamilspain.tabgroup;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.kroll.common.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public final class CustomtabgroupAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";
	
	public CustomtabgroupAppInfo(TiApplication app) {
		TiProperties properties = app.getSystemProperties();
		TiProperties appProperties = app.getAppProperties();
					
					properties.setBool("ti.android.fastdev", true);
					appProperties.setBool("ti.android.fastdev", true);
					
					properties.setString("ti.deploytype", "development");
					appProperties.setString("ti.deploytype", "development");
	}
	
	public String getId() {
		return "com.jamilspain.tabgroup";
	}
	
	public String getName() {
		return "CustomTabGroup";
	}
	
	public String getVersion() {
		return "1.0";
	}
	
	public String getPublisher() {
		return "hbcumobile";
	}
	
	public String getUrl() {
		return "http://";
	}
	
	public String getCopyright() {
		return "2012 by hbcumobile";
	}
	
	public String getDescription() {
		return "not specified";
	}
	
	public String getIcon() {
		return "appicon.png";
	}
	
	public boolean isAnalyticsEnabled() {
		return true;
	}
	
	public String getGUID() {
		return "3fe04ede-026d-4020-b9ad-f1d86ce9ce59";
	}
	
	public boolean isFullscreen() {
		return false;
	}
	
	public boolean isNavBarHidden() {
		return false;
	}
}
