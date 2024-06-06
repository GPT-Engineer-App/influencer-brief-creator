import { Container, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    campaignName: "",
    brandName: "",
    objectives: "",
    targetAudience: "",
    keyMessages: "",
    deliverables: "",
    budget: "",
    timeline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Here you can add the logic to send the form data to a server or API endpoint
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl" mb={6}>Influencer Marketing Brief Creator</Heading>
        <FormControl id="campaignName" isRequired>
          <FormLabel>Campaign Name</FormLabel>
          <Input name="campaignName" value={formData.campaignName} onChange={handleChange} />
        </FormControl>
        <FormControl id="brandName" isRequired>
          <FormLabel>Brand Name</FormLabel>
          <Input name="brandName" value={formData.brandName} onChange={handleChange} />
        </FormControl>
        <FormControl id="objectives" isRequired>
          <FormLabel>Objectives</FormLabel>
          <Textarea name="objectives" value={formData.objectives} onChange={handleChange} />
        </FormControl>
        <FormControl id="targetAudience" isRequired>
          <FormLabel>Target Audience</FormLabel>
          <Textarea name="targetAudience" value={formData.targetAudience} onChange={handleChange} />
        </FormControl>
        <FormControl id="keyMessages" isRequired>
          <FormLabel>Key Messages</FormLabel>
          <Textarea name="keyMessages" value={formData.keyMessages} onChange={handleChange} />
        </FormControl>
        <FormControl id="deliverables" isRequired>
          <FormLabel>Deliverables</FormLabel>
          <Textarea name="deliverables" value={formData.deliverables} onChange={handleChange} />
        </FormControl>
        <FormControl id="budget" isRequired>
          <FormLabel>Budget</FormLabel>
          <Input name="budget" value={formData.budget} onChange={handleChange} />
        </FormControl>
        <FormControl id="timeline" isRequired>
          <FormLabel>Timeline</FormLabel>
          <Input name="timeline" value={formData.timeline} onChange={handleChange} />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" mt={4}>Submit Brief</Button>
      </VStack>
    </Container>
  );
};

export default Index;