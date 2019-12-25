# nhentai.net API
A API wrapper that reads the HTML of the site and extracts info

This library supports fetching:
- Manga, 
- List of Manga, 
- tags/characters/parodies/catagories/groups/artists

To install use  

# Install
``` npm install --save api-nhentai-net ```

# API

## Manga
### getManga(manga_id)

## Lists
``` WARNING: The string arguments are not escaped (Eg. query, tag, ...) ```  
  
### getHomeManga([page])
### searchByText(query [, page])
### searchByCharacter(character [, page])
### searchByTag(tag [, page])
### searchByArtist(artist [, page])
### searchByParody(parody [, page])
### searchByGroup(group [, page])

## Tags
### getTags([page])
### getArtists([page])
### getCharacters([page])
### getParodies([page])
### getGroups([page])
