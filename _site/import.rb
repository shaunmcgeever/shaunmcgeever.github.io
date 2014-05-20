require "jekyll-import"
    JekyllImport::Importers::Tumblr.run({
      "url"            => "http://shaunmcgeeves.tumblr.com",
      "format"         => "html", 
      "grab_images"    => true,  
      "add_highlights" => false,  
      "rewrite_urls"   => false   
    })