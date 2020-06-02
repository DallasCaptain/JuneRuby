class Ninja

    attr_accessor :name, :weapon

    @@clansize = 0

    def initialize(name,weapon)
        @eyeColor = 'blue'
        @name = name
        @weapon = weapon
        @@clansize += 1
    end
    
    def clansize
        puts self
        puts @@clansize
        
    end
    

    def speak
        puts "I am #{@name}, silent as a leaf, I will #{@weapon} you!"
        self
    end
    def speak2
        puts "I am #{@name}, silent as a leaf, I will #{@weapon} you!"
    end

end

class Sensai < Ninja
    attr_accessor :superPower

    def initialize(name,weapon,superPower)
        super(name,weapon)
        @superPower = superPower
    end

    def speak
        super
        puts "I am #{@name}, you are not"
    end
end

class Asdfasdf < Sensai
    def initialize(name,weapon,superPower)
        super(name,weapon,superPower)
    end
    def speak2
        super
    end
end

bob = Ninja.new('BOB','SWORD')
carl = Ninja.new('Carl','Nunchucks')
splinter = Sensai.new('splinter','teeth','Mutating')
nick = Asdfasdf.new('asedf','a2w4er','werasdf')
nick.speak2
puts splinter.superPower
p nick
# splinter.speak
# splinter.clansize
# puts bob
# puts bob.clansize.speak.speak.speak.speak
# bob.speak

# carl.speak

#puts carl.clansize

ggg = {name: 'bob'}

p ggg