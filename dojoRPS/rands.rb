def randomStringArray(numStrings, numLength)
    aList = []
    aString = ""
    (0..numStrings-1).each{ |y| 
    (1..numLength).each{ |x| aString+=(rand(65..90)).chr}
    aList.push( aString )
    aString = ""}
    
    return aList.to_s
end
puts randomStringArray(10,5)

