Webpack::Lite.configure do |config|
  config.manifest_path = "public/packs/#{Rails.env}/manifest.json"
end
