Org.create(name: "the museum of arts and design",
    mission: "The Museum of Arts and Design (MAD) explores the value of making across all fields of contemporary creative practice.", 
    street: "2 Columbus Circle", 
    city: "New York", 
    zip: "10019", 
    country: "United States" )
    
Org.create(name: "Jan van Eyck Academie", mission: "The Van Eyck is a post-academic institute for artistic talent development with an international outlook, located in Maastricht.", street: "Academieplein 1", city: "Maastricht", zip: "6211 KM", country: "Netherlands1" )

    Call.create(name: "Artist Studios Program at MAD", description: "Located on the sixth floor of the Museum and open daily to the public, the Artist Studios at MAD is a professional development program for contemporary artists and designers. The only artist residency of its kind, the program is designed to encourage visitors to interact with artists-in-residence as they expand their creative practice while working on site at MAD. ", medium: "Design", deadline:  Date.new(2019,10,24), org_id: 1 )

    Call.create(name: "Painters without Brushes", description: "Artists, designers, curators, photographers, (landscape) architects, writers and researchers are invited to apply for a 12-month residency at the Jan van Eyck Academie, starting in either spring or autumn 2020.", medium: "painting", deadline:  Date.new(2019,11,18), org_id: 2 )

    Call.create(name: "Next Level Competition", description: "creative soul with a mission to help build a bridge between local and global communities. We provide a unique and fertile landscape that nurtures artists and their artistic processes. We offer focused time and space for artists to transcend to new levels in their work, ideas, and lives.", medium: "digital", deadline:  Date.new(2019,12,5), org_id: 1 )
    
    Call.create(name: "Thinking and Sitting", description: "Our fablab and studios are equipped with all the necessary tools and equipements  to enhance the possibilities of experimentation of our residents. Besides access to lasercut, 3D printing and other technologies", medium: "Fabrication", deadline:  Date.new(2019,12,14), org_id: 2 )
