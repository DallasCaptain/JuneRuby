def randomStringArray(numStrings, numLength)
    aList = []
    aString = ""
    (0..numStrings-1).each{|y| aList.push((1..numLength).each{|x| aString+=(rand(65..90)).chr})}
    return aList.to_s
end
puts randomStringArray(10,5)