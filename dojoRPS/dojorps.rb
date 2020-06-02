class Choice
    attr_accessor :name
    def initialize name
        @name = name
    end

    def win opponent
        puts "#{self.name} has beaten #{opponent.name}"
    end

    def lose opponent
        puts "#{self.name} has lost to #{opponent.name}"
    end

    def tie
        puts "#{self.name} ties with himself"
    end

    def battle opponent
        if self.is_a? Ninja
            puts 'P1 is a ninja'
            if opponent.is_a? Pirate
                win opponent
            elsif opponent.is_a? Zombie
                lose opponent
            else
                tie

            end
        elsif self.is_a? Pirate
            puts 'P1 is a Pirate'
            if opponent.is_a? Ninja
                lose opponent
            elsif opponent.is_a? Zombie
                win opponent
            else
                tie
            end
        else
            puts 'P1 is a Zombie'
            if opponent.is_a? Ninja
                win opponent
            elsif opponent.is_a? Pirate
                lose opponent
            else
                tie
            end
        end
    end

end


class Ninja < Choice
    
   
    def initialize name
        super name
    end
end

class Pirate < Choice
   
    def initialize name
        super name
    end
end

class Zombie < Choice
    
    def initialize name
        super name
    end
end

pirate = Pirate.new 'Barbara'
ninja = Ninja.new 'David'
zombie = Zombie.new 'Miyagi'


myriam = [zombie,zombie,zombie]
rebecca = [zombie,zombie,ninja]

myriam[0].battle rebecca[0]
myriam[1].battle rebecca[1]
myriam[2].battle rebecca[2]

    # for(i = 0, i< arr.length, i++){
    #     p1 = arr[i]
    #     for(y = 0, y<arr.length, y++){
    #         p2 = arr[y]
    #         p1.battle(p2)
    #     }
    # }
# ninja.battle ninja


arr = [pirate,ninja,zombie]

arr.each {|p1| puts 'p1:',p1.name
    arr.each {|p2| puts 'p2:',p2.name
    p1.battle p2}
}


