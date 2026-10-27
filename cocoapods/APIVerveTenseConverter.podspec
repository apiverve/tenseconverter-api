Pod::Spec.new do |s|
  s.name             = 'APIVerveTenseConverter'
  s.version          = '1.2.3'
  s.summary          = 'Tense Converter rewrites text into past or future tense.'
  s.description      = <<-'DESC'
Tense Converter rewrites text into past or future tense. Submit any passage with your chosen target tense to receive the transformed wording and a flag indicating whether the text changed.

This iOS/macOS SDK provides a convenient way to access the Tense Converter from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/tenseconverter?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/tenseconverter-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveTenseConverter/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
