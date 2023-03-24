// AutolinkedNativeModules.g.cpp contents generated by "react-native autolink-windows"
// clang-format off
#include "pch.h"
#include "AutolinkedNativeModules.g.h"

// Includes from @dr.pogodin/react-native-static-server
#include <winrt/ReactNativeStaticServer.h>

// Includes from react-native-fs
#include <winrt/RNFS.h>

// Includes from react-native-webview
#include <winrt/ReactNativeWebView.h>

namespace winrt::Microsoft::ReactNative
{

void RegisterAutolinkedNativeModulePackages(winrt::Windows::Foundation::Collections::IVector<winrt::Microsoft::ReactNative::IReactPackageProvider> const& packageProviders)
{ 
    // IReactPackageProviders from @dr.pogodin/react-native-static-server
    packageProviders.Append(winrt::ReactNativeStaticServer::ReactPackageProvider());
    // IReactPackageProviders from react-native-fs
    packageProviders.Append(winrt::RNFS::ReactPackageProvider());
    // IReactPackageProviders from react-native-webview
    packageProviders.Append(winrt::ReactNativeWebView::ReactPackageProvider());
}

}
