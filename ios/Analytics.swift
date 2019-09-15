//
//  Analytics.swift
//  CoffeeApp
//
//  Created by Chetna Bishnoi on 16/09/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(Analytics)
class Analytics: NSObject {
  
  @objc
  func trackScreen() {
    print("TrackScreen")
  }
  
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
