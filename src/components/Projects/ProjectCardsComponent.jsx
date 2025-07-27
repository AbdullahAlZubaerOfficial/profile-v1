import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../src/components/project";

function ProjectCardsComponent() {
  const categories = ["all", ...new Set(projects.map((project) => project.category))];
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="space-y-8">
      <Tabs defaultValue="all" onValueChange={setActiveCategory} className="w-full">
        <TabsList className="w-full z-10 lg:max-w-m mx-auto grid grid-cols-3 mb-8 dark:bg-[#0A2540]">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="capitalize">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default ProjectCardsComponent;