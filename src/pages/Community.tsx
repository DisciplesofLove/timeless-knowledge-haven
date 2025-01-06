import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, MessageCircle, BookOpen, Search, Hash } from "lucide-react";

export const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#7E69AB] to-[#9b87f5]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Eternal Archive Community</h1>
        
        <Tabs defaultValue="groups" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-lg">
            <TabsTrigger value="groups" className="text-white">
              <Users className="w-4 h-4 mr-2" />
              Groups
            </TabsTrigger>
            <TabsTrigger value="discussions" className="text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              Discussions
            </TabsTrigger>
            <TabsTrigger value="bookClubs" className="text-white">
              <BookOpen className="w-4 h-4 mr-2" />
              Book Clubs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="groups" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Input 
                    placeholder="Search groups..." 
                    className="bg-white/20 border-none text-white placeholder:text-white/60"
                  />
                  <Button variant="ghost" className="ml-2">
                    <Search className="w-4 h-4 text-white" />
                  </Button>
                </div>
                <ScrollArea className="h-[400px]">
                  {["NFT Creators", "Document Preservation", "Academic Research", "Legal Archives"].map((group) => (
                    <div key={group} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg mb-2">
                      <div className="flex items-center">
                        <Hash className="w-4 h-4 text-[#D946EF] mr-2" />
                        <span className="text-white">{group}</span>
                      </div>
                      <Button variant="secondary" size="sm">Join</Button>
                    </div>
                  ))}
                </ScrollArea>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Create a New Group</h3>
                <div className="space-y-4">
                  <Input placeholder="Group Name" className="bg-white/20 border-none text-white placeholder:text-white/60" />
                  <Input placeholder="Description" className="bg-white/20 border-none text-white placeholder:text-white/60" />
                  <Button className="w-full bg-[#D946EF] hover:bg-[#D946EF]/80">
                    Create Group
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="discussions" className="mt-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <div className="space-y-4">
                {["Latest Uploads", "Technical Discussion", "Governance Proposals", "Feature Requests"].map((topic) => (
                  <div key={topic} className="p-4 bg-white/5 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-2">{topic}</h3>
                    <p className="text-gray-300 text-sm mb-3">Join the conversation about {topic.toLowerCase()}</p>
                    <Button variant="outline" className="text-white border-white/20">
                      View Discussion
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="bookClubs" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Classic Literature", "Web3 Publications", "Research Papers", "Legal Documents"].map((club) => (
                <div key={club} className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{club}</h3>
                  <p className="text-gray-300 mb-4">Weekly discussions about {club.toLowerCase()}</p>
                  <Button className="w-full bg-[#D946EF] hover:bg-[#D946EF]/80">
                    Join Club
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CommunityPage;