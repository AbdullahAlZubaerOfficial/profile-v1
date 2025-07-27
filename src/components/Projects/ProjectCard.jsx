import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "../ui/badge";
import { Modal, ModalBody, ModalHeader, ModalTitle } from "../../components/Modal";

function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Card className="overflow-hidden bg-white dark:bg-[#162034] h-full flex flex-col group border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-white/10 transition-all duration-300">
        <div className="relative overflow-hidden h-64">
          <div className="absolute hidden inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:flex items-center justify-center z-10">
            <div className="flex gap-4">
          <Button 
  size="sm" 
  variant="secondary"
  className="bg-white text-black dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
>
  <a 
    href={project.liveUrl} 
    target="_blank" 
    rel="noreferrer" 
    className="flex items-center"
  >
    <ExternalLink className="mr-2 h-4 w-4" />
    Live Demo
  </a>
</Button>

            </div>
          </div>
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.name}
            className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        <CardContent className="flex-grow pt-6 px-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {project.description.length > 100 
              ? `${project.description.slice(0, 100)}...` 
              : project.description}
            {project.description?.length > 100 && (
              <Button
                variant="link"
                className="px-0 h-auto font-medium text-primary hover:text-primary/80 dark:text-blue-400 dark:hover:text-blue-300"
                onClick={() => setIsModalOpen(true)}
              >
                Read more
              </Button>
            )}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="font-normal bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

     <CardFooter
  className={`border-t border-gray-200 dark:border-gray-700 pt-4 px-6 pb-6 flex justify-between ${!project?.clientRepo && !project?.serverRepo ? "md:hidden" : ""}`}
>
  {project.clientRepo && (
    <a
      href={project.clientRepo}
      className="text-sm font-medium flex items-center text-black dark:text-white hover:text-primary dark:hover:text-blue-400 transition-colors"
      target="_blank"
      rel="noreferrer"
    >
      <Github className="mr-1 h-4 w-4" />
      Client
    </a>
  )}
  {project.serverRepo && (
    <a
      href={project.serverRepo}
      className="text-sm font-medium flex items-center text-black dark:text-white hover:text-primary dark:hover:text-blue-400 transition-colors"
      target="_blank"
      rel="noreferrer"
    >
      <Github className="mr-1 h-4 w-4" />
      Server
    </a>
  )}
  <a
    href={project.liveUrl}
    className="text-sm md:hidden font-medium flex items-center text-black dark:text-white hover:text-primary dark:hover:text-blue-400 transition-colors"
    target="_blank"
    rel="noreferrer"
  >
    <ExternalLink className="mr-1 h-4 w-4" />
    Live
  </a>
</CardFooter>

      </Card>

      {isMounted && (
        <Modal 
          className="z-50 bg-white dark:bg-[#0a0f1f] border border-gray-200 dark:border-gray-800" 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
        >
          <ModalHeader>
            <ModalTitle className="text-gray-900 dark:text-white">{project.name}</ModalTitle>
          </ModalHeader>
          <ModalBody className="px-6 pb-6">
            <div className="space-y-6">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <img 
                  src={project.image || "/placeholder.svg"} 
                  alt={project.name} 
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                  {project.description}
                </p>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Category</h4>
                  <p className="text-gray-600 dark:text-gray-400 capitalize">{project.category}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="font-normal bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
  <a 
    href={project.liveUrl} 
    target="_blank" 
    rel="noreferrer" 
    className="flex items-center text-white dark:text-white"
  >
    <ExternalLink className="mr-2 h-4 w-4" />
    Live Demo
  </a>
</Button>
                  {project.clientRepo && (
                    <Button variant="outline" className="border-gray-300 dark:border-gray-600">
                      <a href={project.clientRepo} target="_blank" rel="noreferrer" className="flex items-center">
                        <Github className="mr-2 h-4 w-4" />
                        Client Code
                      </a>
                    </Button>
                  )}
                  {project.serverRepo && (
                    <Button variant="outline" className="border-gray-300 dark:border-gray-600">
                      <a href={project.serverRepo} target="_blank" rel="noreferrer" className="flex items-center">
                        <Github className="mr-2 h-4 w-4" />
                        Server Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      )}
    </>
  );
}

export default ProjectCard;