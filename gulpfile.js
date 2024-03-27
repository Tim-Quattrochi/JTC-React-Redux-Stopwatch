import gulp from "gulp";
import { createServer, build } from "vite";
import ts from "gulp-typescript";
import gulpRemoveLogging from "gulp-remove-logging";
const tsProject = ts.createProject("tsconfig.json");

gulp.task("dev", async () => {
  const server = await createServer({
    mode: "development",
    server: {
      port: 3000,
    },
  });

  server.listen();

  gulp.watch(["src/**/*.tsx", "src/**/*.css"], async (cb) => {
    if (cb.path && cb.path.endsWith(".ts")) {
      await server.restart();
    } else if (cb.path && cb.path.endsWith(".css")) {
      await server.reload();
    }
  });
});

gulp.task("build", async () => {
  await build({
    mode: "production",
  });
});

gulp.task("remove_logging", function () {
  return gulp
    .src("src/**/*.tsx")
    .pipe(
      gulpRemoveLogging({
        // Options (optional)
        // eg:
        namespace: ["console", "window.console"],
      })
    )
    .pipe(gulp.dest("./dist/"));
});

gulp.task("compile", () => {
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.series("dev"));

export default gulp;
