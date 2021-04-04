function isTouching(kushagra,lipika){
    if (kushagra.x - lipika.x < lipika.width/2 + kushagra.width/2
      && lipika.x - kushagra.x < lipika.width/2 + kushagra.width/2
      && kushagra.y -lipika.y < lipika.height/2 + kushagra.height/2
      && lipika.y - kushagra.y < lipika.height/2 + kushagra.height/2) {
   
    return true
  }
  else {
    
    return false
  }
  }