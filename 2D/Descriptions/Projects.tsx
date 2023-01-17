export const ProjectsMarkup = (
  <>
    <h1>Projects & Experience</h1>
    <ul className="project-list">
      <li>3D Portfolio Website</li>
      <ul className="custom-list-item">
        <li>My Personal Frontend Website</li>
        <li>Built on NextJs, Zustand and React-Three-Fiber(threeJS)</li>
        <li>3D virtual exploration with futuristic theme</li>
        <li>Optimized(decimate) 3D models size to the smallest in Blender</li>
        <li>Compressed 3D models size in gltf report website</li>
        <li>Optimized 3D model texture images</li>
        <li>Reused geometry and mesh to reduce additional GPU call</li>
        <li>Used instancing to same mesh to allow drawing multiple mesh with one draw call</li>
        <li>Used cheaper gradient mesh over expensive light source for similar lighting effect</li>
        <li>Used on-demand frame loop to ensure smooth performance</li>
        <li>Lazy load large secondary 3D model files</li>
        <li>Responsive for mobile and computer screen</li>
      </ul>
      <li>Astro NJOI app (outsourced)</li>
      <ul className="custom-list-item">
        <li>Implement code splitting on route and redux</li>
        <li>Improve jest test coverage to 100%</li>
        <li>Utilize React best practices to optimize rendering</li>
        <li>Built on ReactJS, Redux toolkit, Jest, React Testing Library, Styled Component</li>

        <li>implement code splitting on route and redux</li>
        <li>improve jest test coverage to 100%</li>
        <li>utilize React best practices to optimize rendering</li>
        <li>actively participate in code review</li>
        <li>collaborate with web designers and backend developers</li>
        <li>improve form page and experience with react-hook-form</li>
        <li>implement modal/popup with react portal</li>
        <li>optimize lighthouse score</li>
        <li>reduce bundle size</li>
        <li>optimize GTM script integration</li>
        <li>optimize image loading</li>
        <li>self hosting web font</li>

      </ul>
      <li>Anime Search App</li>
      <ul className="custom-list-item">
        <li>Simple anime searching web application built on React.</li>
      </ul>
      <li>Animated Geospatial Data Visualization Platform</li>
      <ul className="custom-list-item">
        <li>Final Year Project</li>
        <li>
          displays animated time series data visualization for geospatial events
        </li>
        <li>Built on Dash Plotly, Python, Celery, Redix, InfluxDB</li>
      </ul>
      <li>Digital Signature Project</li>
      <ul className="custom-list-item">
        <li>Internship project</li>
        <li>
          Web application that allows signers to digitally sign documents online
          without passing the documents around physically.
        </li>
        <li>Built on React, Redux and Firebase</li>

      </ul>
    </ul>
  </>
)
