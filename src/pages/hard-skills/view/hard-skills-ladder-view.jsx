import 'reactflow/dist/style.css';
import { shallow } from 'zustand/shallow';
import ReactFlow, { Panel, Controls, getStraightPath, BaseEdge } from 'reactflow';

import useStore from '../services/store';

// ----------------------------------------------------------------------

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
});

const nodeOrigin = [0.5, 0.5];

function MindMapEdge(props) {
  const { sourceX, sourceY, targetX, targetY } = props;

  const [edgePath] = getStraightPath({
    sourceX,
    sourceY: sourceY + 18,
    targetX,
    targetY,
  });

  return <BaseEdge path={edgePath} {...props} />;
}

const edgeTypes = {
  mindmap: MindMapEdge,
};

export default function HardSkillsView() {
  const { nodes, edges, onNodesChange, onEdgesChange } = useStore(selector, shallow);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      edgeTypes={edgeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeOrigin={nodeOrigin}
      minZoom={0.1}
      fitView
      edgesUpdatable={false}
      onNodeClick={(event, node) => console.log('onNodeClick', node)}
    >
      <Controls showInteractive={false} />
      <Panel position="top-left">React Flow Mind Map</Panel>
    </ReactFlow>
  );
}
